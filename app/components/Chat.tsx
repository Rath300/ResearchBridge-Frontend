'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { initializeSocket, disconnectSocket } from '@/app/utils/socket';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
}

export default function Chat() {
  const [socket, setSocket] = useState<any>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    let currentSocket: any = null;

    const initSocket = () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Authentication required');
          return;
        }

        currentSocket = initializeSocket(token);
        if (currentSocket) {
          setSocket(currentSocket);

          currentSocket.on('connect', () => {
            console.log('Connected to chat');
            setConnected(true);
            setError(null);
          });

          currentSocket.on('disconnect', () => {
            console.log('Disconnected from chat');
            setConnected(false);
          });

          currentSocket.on('message', (message: Message) => {
            setMessages(prev => [...prev, message]);
          });

          currentSocket.on('error', (err: Error) => {
            console.error('Socket error:', err);
            setError('Connection error occurred');
          });
        }
      } catch (err) {
        console.error('Failed to initialize socket:', err);
        setError('Failed to connect to chat');
      }
    };

    initSocket();

    return () => {
      if (currentSocket) {
        currentSocket.off('connect');
        currentSocket.off('disconnect');
        currentSocket.off('message');
        currentSocket.off('error');
        disconnectSocket();
      }
    };
  }, []);

  const sendMessage = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!socket || !connected || !inputMessage.trim()) return;

    socket.emit('message', {
      text: inputMessage,
      timestamp: new Date().toISOString(),
    });

    setInputMessage('');
  }, [socket, connected, inputMessage]);

  if (error) {
    return (
      <div className="p-4 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto border rounded-lg">
      <div className="p-4 border-b bg-gray-50">
        <h2 className="text-lg font-semibold">
          Chat {connected ? 
            <span className="text-green-500 text-sm">(Connected)</span> : 
            <span className="text-red-500 text-sm">(Disconnected)</span>
          }
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg max-w-[80%] ${
              message.sender === 'me'
                ? 'ml-auto bg-blue-500 text-white'
                : 'bg-gray-100'
            }`}
          >
            <p>{message.text}</p>
            <span className="text-xs text-gray-500">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded"
            disabled={!connected}
          />
          <button
            type="submit"
            disabled={!connected || !inputMessage.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
} 