import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

// Define a context
const SocketContext = createContext();

// Define a socket provider
export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const authUser = useSelector(state => state.root.userInfo);
  useEffect(() => {
   
    if (authUser) {
      const socket = io('http://localhost:5000', {
        query: {
          token: authUser.token,
        },
      });

      setSocket(socket);
      
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

