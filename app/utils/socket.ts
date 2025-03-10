import { Manager } from 'socket.io-client';

const SOCKET_URL = process.env.NEXT_PUBLIC_API_URL || 'https://researchbridge-server.onrender.com';

type SocketType = any; // TODO: Replace with proper type when available

let socket: SocketType | null = null;

export const initializeSocket = (token: string): SocketType | null => {
  if (!socket) {
    const manager = new Manager(SOCKET_URL, {
      auth: {
        token,
      },
      transports: ['websocket'],
      autoConnect: true,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });
    
    socket = manager.socket('/');

    socket.on('connect', () => {
      console.log('Socket connected');
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    socket.on('error', (error: Error) => {
      console.error('Socket error:', error);
    });
  }
  return socket;
};

export const getSocket = (): SocketType => {
  if (!socket) {
    throw new Error('Socket not initialized. Call initializeSocket first.');
  }
  return socket;
};

export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}; 