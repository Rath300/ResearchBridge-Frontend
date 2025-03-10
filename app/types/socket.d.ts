import { Socket as SocketIOClient } from 'socket.io-client';

declare module 'socket.io-client' {
  interface SocketEvents {
    connect: () => void;
    disconnect: () => void;
    error: (error: Error) => void;
  }

  interface SocketOptions {
    auth: {
      token: string;
    };
    transports: string[];
    autoConnect: boolean;
    reconnection: boolean;
    reconnectionDelay: number;
    reconnectionDelayMax: number;
    reconnectionAttempts: number;
  }

  type SocketType = SocketIOClient & {
    on: <T extends keyof SocketEvents>(event: T, listener: SocketEvents[T]) => void;
    emit: <T extends keyof SocketEvents>(event: T, ...args: Parameters<SocketEvents[T]>) => void;
  };

  export { SocketType as Socket };
} 