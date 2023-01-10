import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Avatar, IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React, { useState } from 'react'
import axios from './axios.js'
import './Chat.css';
function Chat({messages}) {
const [input, setInput] = useState("");
    
    const sendMessage = async (e) =>{
e.preventDefault();

await axios.post("/api/v1/messages/new", {
  message: input,
  name: "DEMO APP",
  timestamp: "Just Now",
  received: false,
});
 setInput("");   
}
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar/>
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message)=>(
        <p className={`chat__message ${message.recived && "chat__reciver"}`}>
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">{message.timestamp}</span> 
        </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange = {(e) => setInput(e.target.value)} placeholder='Type a message'
          type="text"/>
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
      <MicIcon/>
      </div>
    </div>
  )
}

export default Chat