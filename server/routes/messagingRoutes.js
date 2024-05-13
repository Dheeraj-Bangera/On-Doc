const express = require("express");
const messagingRouter = express.Router();

const auth = require("../middleware/auth");
const {
  accessChatHandler,
  fetchChatsHandler,
  getMessagesHandler,
  sendMessageHandler
} = require("../controllers/messagingHandler");

messagingRouter.post("/access",auth, accessChatHandler);
messagingRouter.get("/getAllChats", auth, fetchChatsHandler);

messagingRouter.get("/getMessages/:id", auth, getMessagesHandler);
messagingRouter.post("/sendMessage", auth, sendMessageHandler);

module.exports = messagingRouter;
