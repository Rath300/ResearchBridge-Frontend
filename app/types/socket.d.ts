import { Socket as BaseSocket } from 'socket.io-client';

export interface CustomSocket extends BaseSocket {
  // Add any custom event types here if needed
}

declare module 'socket.io-client' {
  export interface Socket extends CustomSocket {}
} 