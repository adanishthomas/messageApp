import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    axios.get("/api/v1/messages/sync").then((response)=>{
      console.log(response.data);
      setMessages(response.data);
    });
  }, []);

  useEffect(()=>{
const pusher = new Pusher('b896204ee12c52914397', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data]);
    });

   return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
    
  }, [messages]);
  


  return (
    <div className="app">
      <div className='app__body'>
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
