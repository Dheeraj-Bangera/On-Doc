import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import { useChatContext } from '../context/ChatContext';

// Define a context
const SocketContext = createContext();

// Define a socket provider
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const authUser = useSelector(state => state.root.userInfo);
  const { currMessages, setCurrMessages } = useChatContext(); // Use useChatContext here

  useEffect(() => {
    if (authUser) {
      const token = localStorage.getItem("token")
      const socket = io('http://localhost:5000', {
        query: {
          token: token,
        },
      });

      socket.on("message", (data) => {
        console.log("Message received:", data);
        setCurrMessages([...currMessages, data])
      });

      setSocket(socket);

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser, currMessages, setCurrMessages]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
