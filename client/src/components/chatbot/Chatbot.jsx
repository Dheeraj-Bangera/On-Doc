import { useState } from 'react'
import './Chatbot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "90ce6f9d-2c44-4a72-82b8-44b110b29ae5";
const systemMessage = { "role": "system", "content": "Explain everything about medicines." };

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Iris! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setIsTyping(true);
    try {
      await processMessageToAwanLLM(newMessages);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsTyping(false);
      // Handle error condition, e.g., display a message to the user
    }
  };

  async function processMessageToAwanLLM(chatMessages) {
    const apiRequestBody = {
      model: "awan-llm",
      messages: [
        systemMessage,
        ...chatMessages.map((messageObject) => ({ role: messageObject.sender === "ChatGPT" ? "assistant" : "user", content: messageObject.message }))
      ]
    };

  const response = await fetch("https://api.awanllm.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "model": "Meta-Llama-3-8B-Instruct",
    "messages": [
      {"role": "user", "content": "explain me anything like a doctor"},
    ],
  })
});
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await response.json();
    setMessages([...chatMessages, { message: data.choices[0].message.content, sender: "ChatGPT" }]);
    setIsTyping(false);
  }

  return (
    <div className="App">
      <div style={{ position:"relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Iris is typing" /> : null}
            >
              {messages.map((message, i) => <Message key={i} model={message} />)}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
