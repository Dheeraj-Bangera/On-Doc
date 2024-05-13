import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PastMessages from '../components/PastMessages'; // Import PastMessages component
import axios from 'axios';
import fetchData from '../helper/apiCall';
import { useChatContext } from '../context/ChatContext';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const ChatPage = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const navigate = useNavigate();
  const { chats,setChats } = useChatContext();

  const people = [
    {
      id: 1,
      name: 'Alice',
      messages: [
        'Hi Bob, how are you?',
        'Did you finish the project?',
        "Let's meet tomorrow at 10 AM.",
      ],
    },
    {
      id: 2,
      name: 'Bob',
      messages: [
        "Hey Alice, I'm good! How about you?",
        'Yes, I finished it yesterday.',
        'Sure, see you tomorrow!',
      ],
    },
    {
      id: 3,
      name: 'Charlie',
      messages: ['Good morning!'],
    },
  ];
  const getAllChats = async () => {
    const data = await fetchData('/message/getAllChats');
    console.log(data)
    setChats(data)
   

  };
  useEffect(() => {
    getAllChats();
  }, []);

  const handlePersonClick = person => {
    setSelectedPerson(person);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 flex">
        <div className="w-1/4 bg-gray-200 p-4">
          <div className="bg-gray-200 p-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBackClick}
            >
              Back
            </button>
          </div>
          <h2 className="text-lg font-semibold mb-4">People</h2>
          <ul>
            {chats.map((person,index)=> (
              <li
                key={index}
                className="cursor-pointer hover:bg-gray-300 rounded p-2 mb-2"
                onClick={() => handlePersonClick(person)}
              >
                {person.users.firstname}
              </li>
            ))}
          </ul>
        </div>
        {selectedPerson ? (
          <PastMessages
          selectedPerson={selectedPerson._id}
          firstname={selectedPerson.users.firstname}
          receiverId={selectedPerson.users._id}
            
          />
        ) : null}
      </div>
    </div>
  );
};

export default ChatPage;
