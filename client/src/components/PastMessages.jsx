import React, { useState } from "react";

const PastMessages = ({ messages, userName, userImage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-gray-300">
      <div className="bg-gray-200 p-4 rounded mb-4 flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src={userImage}
          alt="User Avatar"
        />
        <p className="text-lg font-semibold">{userName}</p>
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 250px)" }}>
        {messages.map((message, index) => (
          <div key={index} className="flex mb-2 justify-end">
            <div className="rounded bg-blue-500 text-white p-2 max-w-md">
              <p className="text-sm">{message}</p>
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
