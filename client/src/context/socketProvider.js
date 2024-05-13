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
    // Check if authUser exists and has a token before establishing socket connection
    console.log(authUser)
    if (authUser ) {
      const token = localStorage.getItem("token")
      const socket = io('http://localhost:5000', {
        query: {
          token: token,
        },
      });

      setSocket(socket);
      
      return () => socket.close();
    } else {
      // Close the socket if authUser or authUser.token is not available
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
