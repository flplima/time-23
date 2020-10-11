import React, { useState, useEffect } from 'react';
import socket from '../services/socket';
import { Message } from '../types';

interface ChatContextType {
  messages: Message[];
  sendMessage: (text: string) => void;
}

export const ChatContext = React.createContext<ChatContextType>(
  {} as ChatContextType,
);

export const ChatContextProvider: React.FC = ({ children }) => {
  const [ messages, setMessages ] = useState<Message[]>([
    { _id: '0', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '1', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '2', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '3', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '4', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '5', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '6', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '7', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '8', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '9', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '10', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '11', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '12', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '13', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '14', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '15', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '16', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '17', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '18', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '19', text: 'test', fromUser: true, createdAt: new Date() },
    { _id: '20', text: 'test', fromUser: true, createdAt: new Date() },
  ]);

  const appendMessage = (message: Message) => {
    setMessages(state => [ ...state, message ]);
  };
  
  const sendMessage = (text: string) => {
    socket.emit('message', { text });
  };

  useEffect(() => {
    socket.on('message', appendMessage);
    return () => {
      socket.off('message', appendMessage);
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{ messages, sendMessage }}
      children={children}
    />
  );
};
