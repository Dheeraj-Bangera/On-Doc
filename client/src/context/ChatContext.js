import React, { createContext, useContext, useState } from 'react';

// Define a context for managing chats and messages
const ChatContext = createContext();

// Custom hook to use the chat context
export const useChatContext = () => useContext(ChatContext);

// Chat context provider component
export const ChatContextProvider = ({ children }) => {
  // State to store all chats
  const [chats, setChats] = useState([]);

  // State to store messages of the selected person
  const [currMessages,setCurrMessages] = useState([]);

  // Function to set messages for the selected person
  

  // Add more functions as needed, e.g., functions to add messages, update chats, etc.

  return (
    <ChatContext.Provider value={{chats, setChats ,currMessages,setCurrMessages}}>
      {children}
    </ChatContext.Provider>
  );
};
