import axios from "axios";
import React, { useEffect, useState } from "react";
import { useChatContext } from '../context/ChatContext';
import jwt_decode from "jwt-decode";

const PastMessages = ({ selectedPerson,firstname,receiverId}) => {
  const [newMessage, setNewMessage] = useState("");
  const {currMessages,setCurrMessages } = useChatContext();
  const { userId } = jwt_decode(localStorage.getItem("token"));

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSend = async() => {
    if (newMessage.trim() !== "") {
      console.log("Sending message:", newMessage);
      const data= {
        content:newMessage, chatId:selectedPerson, receiverId
      }
      const response = await axios.post(`/message/sendMessage`,data,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
      }})
      console.log(response)
      setCurrMessages([...currMessages,response.data])
      setNewMessage("");
    }
  };

  const fetchMessages=async()=>{
    const {data} = await axios.get(`/message/getMessages/${selectedPerson}`, {headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }})
      setCurrMessages(data)
      console.log(data)
  }
  useEffect(() => {
    fetchMessages()
  }, [])
  

  return (
    <div className="flex flex-col flex-1 bg-gray-300">
      <div className="bg-gray-200 p-4 rounded mb-4 flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
          alt="User Avatar"
        />
        <p className="text-lg font-semibold">{firstname}</p>
      </div>
      <div className="overflow-y-auto" >
  {currMessages.map((message, index) => (
    <div
      key={index}
      className={`flex mb-2 ${userId === message.sender._id ?   'justify-end':'justify-start'}`}
    >
      <div className={`rounded ${userId === message.sender._id ?   'bg-blue-500 text-white':'bg-gray-200 text-gray-800'} p-2 max-w-md`}>
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  ))}
</div>

      <div className="mt-auto flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-l border outline-none"
          placeholder="Type a message..."
          value={newMessage}
          onChange={handleMessageChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PastMessages;
