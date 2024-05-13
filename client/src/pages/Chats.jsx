import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PastMessages from "../components/PastMessages"; // Import PastMessages component

const ChatPage = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const navigate = useNavigate();

  const people = [
    { 
      id: 1, 
      name: "Alice", 
      messages: [
        "Hi alice, how are you?",
        "Did you finish the project?",
        "Let's meet tomorrow at 10 AM."
      ] 
    },
    { 
      id: 2, 
      name: "Bob", 
      messages: [
        "Hey bob, I'm good! How about you?",
        "Yes, I finished it yesterday.",
        "Sure, see you tomorrow!"
      ] 
    },
    { 
      id: 3, 
      name: "Charlie", 
      messages: [
        "Good morning!",
        
      ] 
    }
  ];
  

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleBackClick = () => {
    navigate("/");
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
            {people.map(person => (
              <li
                key={person.id}
                className="cursor-pointer hover:bg-gray-300 rounded p-2 mb-2"
                onClick={() => handlePersonClick(person)}
              >
                {person.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedPerson ? <PastMessages messages={selectedPerson.messages} userName={selectedPerson.name}/> : null}
      </div>
    </div>
  );
};

export default ChatPage;
