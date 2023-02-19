package main

import (
	"crypto/tls"
	"crypto/x509"
	"encoding/json"
	exhausterModel "exhauster-server-main/pkg/model"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	socketio "github.com/googollee/go-socket.io"

	service "exhauster-server-main/pkg/service"

	"github.com/Shopify/sarama"
	"github.com/joho/godotenv"
	"github.com/sirupsen/logrus"
	"github.com/sirupsen/logrus/hooks/writer"
	"github.com/spf13/viper"
	_ "github.com/xdg/scram"
)

var exhIdCollection map[int]string
var allowOriginFunc = func(r *http.Request) bool {
	return true
}

func GinMiddleware(allowOrigin string) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", allowOrigin)
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Accept, Authorization, Content-Type, Content-Length, X-CSRF-Token, Token, session, Origin, Host, Connection, Accept-Encoding, Accept-Language, X-Requested-With")

		if c.Request.Method == http.MethodOptions {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Request.Header.Del("Origin")

		c.Next()
	}
}

func main() {
	if err := initConfig(); err != nil {
		logrus.Fatalf("Error to init config: %s", err.Error())
	}
	if err := godotenv.Load(); err != nil {
		logrus.Fatalf("Error to init environment variable: %s", err.Error())
	}

	// Инициализация логгера
	logrus.SetFormatter(new(logrus.JSONFormatter))

	fileError, err := os.OpenFile(viper.GetString("paths.logs.error"), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err == nil {
		logrus.AddHook(&writer.Hook{
			Writer: fileError,
			LogLevels: []logrus.Level{
				logrus.ErrorLevel,
			},
		})
	} else {
		logrus.SetOutput(os.Stderr)
		logrus.Error("Failed to log to file, using default stderr")
	}

	defer fileError.Close()

	fileInfo, err := os.OpenFile(viper.GetString("paths.logs.info"), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err == nil {
		logrus.AddHook(&writer.Hook{
			Writer: fileInfo,
			LogLevels: []logrus.Level{
				logrus.InfoLevel,
				logrus.DebugLevel,
			},
		})
	} else {
		logrus.SetOutput(os.Stderr)
		logrus.Error("Failed to log to file, using default stderr")
	}

	defer fileInfo.Close()

	fileWarn, err := os.OpenFile(viper.GetString("paths.logs.warn"), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err == nil {
		logrus.AddHook(&writer.Hook{
			Writer: fileWarn,
			LogLevels: []logrus.Level{
				logrus.WarnLevel,
			},
		})
	} else {
		logrus.SetOutput(os.Stderr)
		logrus.Error("Failed to log to file, using default stderr")
	}

	defer fileWarn.Close()

	fileFatal, err := os.OpenFile(viper.GetString("paths.logs.fatal"), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err == nil {
		logrus.AddHook(&writer.Hook{
			Writer: fileFatal,
			LogLevels: []logrus.Level{
				logrus.FatalLevel,
			},
		})
	} else {
		logrus.SetOutput(os.Stderr)
		logrus.Error("Failed to log to file, using default stderr")
	}

	defer fileFatal.Close()

	router := gin.New()

	server := socketio.NewServer(nil)

	server.OnConnect("/", func(s socketio.Conn) error {
		s.SetContext("")
		log.Println("connected:", s.ID())
		log.Println("Namespace:", s.Namespace())
		return nil
	})

	server.OnEvent("/", "get_exhauster_values", func(s socketio.Conn, msg string) string {
		fmt.Println(msg)
		s.SetContext(msg)
		return "recv " + msg
	})

	server.OnEvent("/", "notice", func(s socketio.Conn, msg string) {
		log.Println("notice:", msg)
		s.Emit("reply", "have "+msg)
	})

	server.OnEvent("/chat", "chat:msg", func(s socketio.Conn, msg string) string {
		fmt.Println(msg)
		s.SetContext(msg)
		return "recv " + msg
	})

	server.OnEvent("/", "bye", func(s socketio.Conn) string {
		last := s.Context().(string)
		s.Emit("bye", last)
		s.Close()
		return last
	})

	server.OnError("/", func(s socketio.Conn, e error) {
		log.Println("meet error:", e)
	})

	server.OnDisconnect("/", func(s socketio.Conn, msg string) {
		log.Println("closed", msg)
	})

	go func() {
		if err := server.Serve(); err != nil {
			log.Fatalf("socketio listen error: %s\n", err)
		}
	}()
	defer server.Close()

	router.Use(GinMiddleware("http://localhost:3000"))
	router.GET("/socket.io/*any", gin.WrapH(server))
	router.POST("/socket.io/*any", gin.WrapH(server))
	router.StaticFS("/public", http.Dir("../asset"))

	if err := router.Run(":8000"); err != nil {
		log.Fatal("failed run app: ", err)
	}

	brokers := viper.GetString("kafka.broker")
	splitBrokers := strings.Split(brokers, ",")
	conf, err := initConfigKafka()
	if err != nil {
		logrus.Error(err.Error())
		os.Exit(1)
	}

	master, err := sarama.NewConsumer(splitBrokers, conf)
	if err != nil {
		logrus.Error(fmt.Sprintf("Coulnd't create consumer: %s", err.Error()))
		os.Exit(1)
	}

	defer func() {
		if err := master.Close(); err != nil {
			panic(err)
		}
	}()

	topic := viper.GetString("kafka.topic")

	consumer, err := master.ConsumePartition(topic, 0, sarama.OffsetOldest)
	if err != nil {
		panic(err)
	}

	signals := make(chan os.Signal, 1)
	signal.Notify(signals, os.Interrupt)

	// Count the number of processed messages
	msgCount := 0
	// Get signal to finish
	doneCh := make(chan struct{})
	go func() {
		for {
			select {
			case err := <-consumer.Errors():
				fmt.Println(err)
			case msg := <-consumer.Messages():
				msgCount++

				// Работа с получаемыми значениями (конвертация в структуру)
				value := string(msg.Value)
				value = strings.ReplaceAll(value, "\\", "")

				var item exhausterModel.KafkaMessage
				err := json.Unmarshal([]byte(value), &item)
				if err != nil {
					fmt.Println(err)
					return
				}

				// Получение данных для 1-го эксгаустера
				exhauster1 := exhausterModel.NewExhausterData(exhIdCollection[1], "Эксгаустер № 1 (У-171)", exhausterModel.GetValues1(&item))
				// Получение данных для 2-го эксгаустера
				exhauster2 := exhausterModel.NewExhausterData(exhIdCollection[2], "Эксгаустер № 2 (У-172)", exhausterModel.GetValues2(&item))
				// Получение данных для 3-го эксгаустера
				exhauster3 := exhausterModel.NewExhausterData(exhIdCollection[3], "Эксгаустер № 3 (Ф-171)", exhausterModel.GetValues3(&item))
				// Получение данных для 4-го эксгаустера
				exhauster4 := exhausterModel.NewExhausterData(exhIdCollection[4], "Эксгаустер № 4 (Ф-172)", exhausterModel.GetValues4(&item))
				// Получение данных для 5-го эксгаустера
				exhauster5 := exhausterModel.NewExhausterData(exhIdCollection[5], "Эксгаустер № 5 (X-171)", exhausterModel.GetValues5(&item))
				// Получение данных для 6-го эксгаустера
				exhauster6 := exhausterModel.NewExhausterData(exhIdCollection[6], "Эксгаустер № 6 (X-172)", exhausterModel.GetValues6(&item))

				var responseExhauster exhausterModel.ResponseExhauster
				responseExhauster.ExhausterCollection = append(responseExhauster.ExhausterCollection, *exhauster1)
				responseExhauster.ExhausterCollection = append(responseExhauster.ExhausterCollection, *exhauster2)
				responseExhauster.ExhausterCollection = append(responseExhauster.ExhausterCollection, *exhauster3)
				responseExhauster.ExhausterCollection = append(responseExhauster.ExhausterCollection, *exhauster4)
				responseExhauster.ExhausterCollection = append(responseExhauster.ExhausterCollection, *exhauster5)
				responseExhauster.ExhausterCollection = append(responseExhauster.ExhausterCollection, *exhauster6)

				responseExhauster.Timestamp = msg.Timestamp
				responseExhauster.Moment = item.Moment

				v, err := json.Marshal(responseExhauster)
				if err != nil {
					fmt.Println(err)
					return
				}

				os.WriteFile(viper.GetString("paths.data"), v, 0666)

				count := viper.GetString("kafka.count_messages")

				if count != "*" {
					val, err := strconv.Atoi(count)
					if err != nil {
						logrus.Error(err.Error())
						doneCh <- struct{}{}
					}

					if msgCount >= val {
						doneCh <- struct{}{}
					}
				}

				time.Sleep(10000)
			case <-signals:
				logrus.Info("Interrupt is detected")
				doneCh <- struct{}{}
			}
		}
	}()

	<-doneCh

	logrus.Info(fmt.Sprintf("Processed %d %s", msgCount, "messages"))
}

func initConfig() error {
	viper.AddConfigPath("config")
	viper.SetConfigName("config")

	exhIdCollection = make(map[int]string)
	exhIdCollection[1] = "15d8d513-4734-4d6c-a346-f1904d8e99bd"
	exhIdCollection[2] = "34c2c537-dcc8-4f5c-927f-7f15ec4d9a60"
	exhIdCollection[3] = "48e9269c-de3a-46b1-add2-4b467d8704a5"
	exhIdCollection[4] = "0c0ca2cf-ea58-4659-b4c2-20ec7894ca9d"
	exhIdCollection[5] = "8fec7a8c-47cf-403d-92d3-1a2aea13c8fc"
	exhIdCollection[6] = "d9a9642e-e96d-41d3-9ae6-b522abeb8992"

	return viper.ReadInConfig()
}

func initConfigKafka() (*sarama.Config, error) {
	conf := sarama.NewConfig()
	conf.Producer.RequiredAcks = sarama.WaitForAll
	conf.Version = sarama.V2_3_0_0
	conf.Consumer.Return.Errors = true
	conf.Consumer.Group.InstanceId = viper.GetString("command_name")
	conf.ClientID = "sasl_scram_client"
	conf.Metadata.Full = true
	conf.Net.SASL.Enable = true
	conf.Net.SASL.User = viper.GetString("kafka.user")
	conf.Net.SASL.Password = viper.GetString("kafka.password")
	conf.Net.SASL.Handshake = true
	conf.Net.SASL.SCRAMClientGeneratorFunc = func() sarama.SCRAMClient { return &service.XDGSCRAMClient{HashGeneratorFcn: service.SHA512} }
	conf.Net.SASL.Mechanism = sarama.SASLMechanism(sarama.SASLTypeSCRAMSHA512)

	certs := x509.NewCertPool()
	pemPath := viper.GetString("paths.cert")
	pemData, err := ioutil.ReadFile(pemPath)
	if err != nil {
		logrus.Error(fmt.Sprintf("Couldn't load cert: %s", err.Error()))
		return nil, err
	}
	certs.AppendCertsFromPEM(pemData)

	conf.Net.TLS.Enable = true
	conf.Net.TLS.Config = &tls.Config{
		InsecureSkipVerify: true,
		RootCAs:            certs,
	}

	return conf, nil
}
