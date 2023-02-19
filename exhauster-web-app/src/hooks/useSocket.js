import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import { useBeforeUnload } from './useBeforeUnload'

const SERVER_URL = 'http://localhost:8000'

export const useSocket = () => {
  const [messages, setMessages] = useState([])
  const socketRef = useRef(null)

  useEffect(() => {
    socketRef.current = io(SERVER_URL)

    // обрабатываем получение списка пользователей
    socketRef.current.on('users', (users) => {
    })

    // отправляем запрос на получение сообщений
    socketRef.current.emit('get_exhauster_values', "get")

    // обрабатываем получение сообщений
    socketRef.current.on('messages', (messages) => {
    })

    return () => {
      // при размонтировании компонента выполняем отключение сокета
      socketRef.current.disconnect()
    }
  }, [])

  const sendMessage = ({ messageText, senderName }) => {
    socketRef.current.emit('chat:msg', {

    })
  }

  const removeMessage = (id) => {
    socketRef.current.emit('message:remove', id)
  }

  useBeforeUnload(() => {
    socketRef.current.emit('user:leave', "a")
  })

  return [messages, sendMessage, removeMessage]
}