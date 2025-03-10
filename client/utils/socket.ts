import { io } from "socket.io-client"

export const initializeSocket = (token: string) => {
  const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000", {
    auth: { token },
    transports: ["websocket"],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    timeout: 20000,
  })

  socket.on("connect_error", (err) => {
    console.error("Socket connection error:", err.message)
  })

  return socket
}

