import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/messages/logs`);
      setMessages(response.data);
    };
    fetchMessages();
  }, []);

  return (
    <div className='chat-container'>
      {messages.map(msg => (
        <div key={msg._id} className='message'>{msg.text}</div>
      ))}
    </div>
  );
}

export default Chat;