const cookie = require( 'cookie' );
const jwt = require("jsonwebtoken");

const initializeSocketIO = (io) => {
  return io.on("connection", (socket) => {
    try {
      console.log("User connected to Socket");

      
      const token = socket.handshake.query?.token || ""
      
      if (!token) {
        
        throw new Error("Token is missing in cookies");
      }

      try {
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken){
            throw new Error("Token is missing in cookies");
        }
        
        socket.user = decodedToken;

        socket.join(decodedToken.userId);
        socket.emit("connected");
        console.log("connected ", decodedToken.userId,"using socket");
      } catch (error) {
    
        console.error("Error verifying token:", error);
        socket.disconnect(); // Disconnect socket if token verification fails
      }
    } catch (err) {
      console.error("Error verifying token:", err);
      socket.disconnect();
    }

    socket.on("disconnect",  () => {
      console.log("user has disconnected 🚫. userId: " + socket.user?.userId);
      if (socket.user?.id) {
        socket.leave(socket.user.id);
      }
    });
  });
};
const emitSocketEvent = (req,receiverId,event,payload) => {
  req.app.get("io").to(receiverId).emit(event, payload);
};
module.exports = {
  initializeSocketIO,
  emitSocketEvent
};
