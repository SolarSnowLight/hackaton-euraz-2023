package model

import "time"

/* Основные данные эксгаустера */
type ExhausterData struct {
	ID            string            `json:"id"`
	Name          string            `json:"name"`
	Bearing1      Bearing1Type      `json:"bearing_1"`
	Bearing2      Bearing1Type      `json:"bearing_2"`
	Bearing3      Bearing2Type      `json:"bearing_3"`
	Bearing4      Bearing2Type      `json:"bearing_4"`
	Bearing5      Bearing2Type      `json:"bearing_5"`
	Bearing6      Bearing2Type      `json:"bearing_6"`
	Bearing7      Bearing1Type      `json:"bearing_7"`
	Bearing8      Bearing1Type      `json:"bearing_8"`
	Bearing9      Bearing2Type      `json:"bearing_9"`
	Cooler        CoolerType        `json:"cooler"`
	GasCollector  GasCollectorType  `json:"gas_collector"`
	ValvePosition ValvePositionType `json:"valve_position"`
	MainDrive     MainDriveType     `json:"main_drive"`
	OilSystem     OilSystemType     `json:"oil_system"`
	Work          float64           `json:"work"`
}

func NewExhausterData(id, name string, values []float64) *ExhausterData {
	var data ExhausterData

	data.ID = id
	data.Name = name
	data.Bearing1.SetValues(values[0:20])         // 20
	data.Bearing2.SetValues(values[20:40])        // 20
	data.Bearing3.SetValues(values[40:45])        // 5
	data.Bearing4.SetValues(values[45:50])        // 5
	data.Bearing5.SetValues(values[50:55])        // 5
	data.Bearing6.SetValues(values[55:60])        // 5
	data.Bearing7.SetValues(values[60:80])        // 20
	data.Bearing8.SetValues(values[80:100])       // 20
	data.Bearing9.SetValues(values[100:105])      // 5
	data.Cooler.SetValues(values[105:109])        // 4
	data.GasCollector.SetValues(values[109:111])  // 2
	data.ValvePosition.SetValues(values[111:114]) // 3
	data.MainDrive.SetValues(values[114:118])     // 4
	data.OilSystem.SetValues(values[118:120])     // 2
	data.Work = values[120]                       // 1

	return &data
}

type ResponseExhauster struct {
	Timestamp           time.Time       `json:"timestamp"`
	Moment              string          `json:"moment"`
	ExhausterCollection []ExhausterData `json:"collection"`
}
