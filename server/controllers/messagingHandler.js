const User = require("../models/userModel");
const Chat = require("../models/chat/Chat");
const Message = require("../models/chat/Message");
const { emitSocketEvent } = require("../utils/socket");


const accessChatHandler = async (req, res) => {
    try {
      const { userId } = req.body;
      const userExists = await User.findOne({ _id: userId});
      if (!userExists) {
        console.log(`Unauthorized access: Provided user ID is unauthorized`);
        return res.status(403).send({
          success:false,
          message:`Unauthorized access`
        }); 
      }
      let isChat = await Chat.find({
        $and: [
          { users: { $elemMatch: { $eq: req.locals } } },
          { users: { $elemMatch: { $eq: userId } } },
        ],
      })
      .populate("users", "-password")
      .populate("latestMessage");
    
      isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "firstname email",
      });
    
      if (isChat.length > 0) {
  
        return res.send(isChat[0]);
      } else {
 
        const chatData = {
          users: [req.locals, userId],
        };
    
        const createdChat = await Chat.create(chatData);
        const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
          "users",
          "-password"
        );
        return res.status(200).json(fullChat);
      }
    } catch (error) {
      console.log(error)
      return res.status(500).send("Internal server error");
    }
};

const fetchChatsHandler = async (req, res) => {
  try {
    const userId = req.locals; 

    const chats = await Chat.find({ users: { $elemMatch: { $eq: userId } } })
      .populate("latestMessage.sender")
      .populate({
        path: "users",
        select: "firstname email",
        match: { _id: { $ne: userId } } // Exclude the current user
      })
      .sort({ updatedAt: -1 })
      .lean(); // Use the lean() function to return plain JavaScript objects instead of Mongoose documents

    if (chats.length === 0) {
      return res.status(404).send({
        message: "No chats found with this user.",
        success: false
      });
    } 

    // If users array has only one element, extract it and return as an object
    const modifiedChats = chats.map(chat => {
      if (chat.users.length === 1) {
        chat.users = chat.users[0];
      }
      return chat;
    });

    return res.status(200).send(modifiedChats);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};



const getMessagesHandler = async (req, res) => {
  try {
    const chatId =req.params.id
    if(!chatId)
    {
      return res.status(400).send({
        message:"Invalid request. Please provide a valid chat id in params.",
        success: false
      })
    }
    const messages = await Message.find({ chat: chatId })
      .populate("sender", "firstname email")
      .populate("reciever")
      .populate("chat");
    return res.json(messages);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};
//put this in util and call it using io instead of  calling http req
const sendMessageHandler = async (req, res) => {
  try {
    const { content, chatId, receiverId } = req.body;

    if (!content || !chatId || !receiverId) {
    
      return res.send(400).send({
        message:"Enter all fields: Content and Chat Id are required!",
        success:false
      });
    }
    const chat = await Chat.findOne({
      _id: chatId,
      users: { $all: [req.locals, receiverId] }
    });
    
    if (!chat) {
      return res.status(404).json({
        message: "Chat not found or receiver is not a participant",
        success: false
      });
    }

    const newMessage = {
      sender: req.locals,
      content: content,
      chat: chatId,
      receiver:receiverId
    };


    const message = await Message.create(newMessage);
    await message.populate("sender", "firstname")
    await message.populate("chat")
    if (message.receiver) {
      await message.populate("receiver")
    }

    await User.populate(message, {
      path: "chat.users",
      select: "firstname email",
    });

    await Chat.findByIdAndUpdate(chatId, { latestMessage: message });
    emitSocketEvent(req,receiverId,"message",message)
    return res.send(message);
  } catch (error) {
    console.log(error);
   return  res.status(500).send("Internal server error");
  }
};


module.exports = {
  accessChatHandler,
  fetchChatsHandler,
  getMessagesHandler,
  sendMessageHandler
}
  
