import React, { useState } from 'react';
import { useChat } from '../../context/ChatContext';
import { useAuth } from '../../context/AuthContext';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const { user } = useAuth();
  const { chats, messages, activeChat, sendMessage, setActiveChat, markAsRead } = useChat();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageText, setMessageText] = useState('');

  if (!user) return null;

  const unreadCount = chats.reduce((total, chat) => total + chat.unreadCount, 0);
  const activeChatMessages = messages.filter(m => 
    activeChat && (
      (m.senderId === user.id && m.receiverId === activeChat.split('-').find(id => id !== user.id)) ||
      (m.receiverId === user.id && m.senderId === activeChat.split('-').find(id => id !== user.id))
    )
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !activeChat) return;

    const receiverId = activeChat.split('-').find(id => id !== user.id);
    if (receiverId) {
      sendMessage(receiverId, messageText);
      setMessageText('');
    }
  };

  const handleChatSelect = (chatId: string) => {
    setActiveChat(chatId);
    markAsRead(chatId);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
      >
        <MessageCircle className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl border z-50 ${isMinimized ? 'h-12' : 'h-96'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-lg">
            <h3 className="font-semibold">Messages</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-blue-700 p-1 rounded"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 p-1 rounded"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="flex h-80">
              {/* Chat List */}
              {!activeChat && (
                <div className="w-full p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Recent Chats</h4>
                  <div className="space-y-2">
                    {chats.length === 0 ? (
                      <p className="text-gray-500 text-sm">No messages yet</p>
                    ) : (
                      chats.map((chat) => (
                        <button
                          key={chat.id}
                          onClick={() => handleChatSelect(chat.id)}
                          className="w-full text-left p-3 hover:bg-gray-50 rounded-lg border"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">
                              Chat #{chat.id.substring(0, 8)}
                            </span>
                            {chat.unreadCount > 0 && (
                              <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                                {chat.unreadCount}
                              </span>
                            )}
                          </div>
                          {chat.lastMessage && (
                            <p className="text-xs text-gray-500 mt-1 truncate">
                              {chat.lastMessage.content}
                            </p>
                          )}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Active Chat */}
              {activeChat && (
                <div className="w-full flex flex-col">
                  <div className="p-3 border-b">
                    <button
                      onClick={() => setActiveChat(null)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      ← Back to chats
                    </button>
                  </div>
                  
                  <div className="flex-1 p-3 overflow-y-auto">
                    <div className="space-y-2">
                      {activeChatMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`p-2 rounded-lg max-w-xs ${
                            message.senderId === user.id
                              ? 'bg-blue-600 text-white ml-auto'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.senderId === user.id ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSendMessage} className="p-3 border-t">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                      <button
                        type="submit"
                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;