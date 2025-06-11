import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

interface Chat {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
}

interface ChatContextType {
  chats: Chat[];
  messages: Message[];
  activeChat: string | null;
  isOnline: boolean;
  sendMessage: (receiverId: string, content: string) => void;
  setActiveChat: (chatId: string | null) => void;
  markAsRead: (chatId: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(true);

  const sendMessage = (receiverId: string, content: string) => {
    if (!user) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: user.id,
      receiverId,
      content,
      timestamp: new Date(),
      read: false
    };

    setMessages(prev => [...prev, message]);
    
    // Update or create chat
    const chatId = [user.id, receiverId].sort().join('-');
    setChats(prev => {
      const existingChat = prev.find(c => c.id === chatId);
      if (existingChat) {
        return prev.map(c => 
          c.id === chatId 
            ? { ...c, lastMessage: message, unreadCount: c.unreadCount + 1 }
            : c
        );
      } else {
        return [...prev, {
          id: chatId,
          participants: [user.id, receiverId],
          lastMessage: message,
          unreadCount: 1
        }];
      }
    });
  };

  const markAsRead = (chatId: string) => {
    setChats(prev => 
      prev.map(c => c.id === chatId ? { ...c, unreadCount: 0 } : c)
    );
  };

  return (
    <ChatContext.Provider value={{
      chats,
      messages,
      activeChat,
      isOnline,
      sendMessage,
      setActiveChat,
      markAsRead
    }}>
      {children}
    </ChatContext.Provider>
  );
};