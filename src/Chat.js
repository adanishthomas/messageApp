import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Avatar, IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react'
import './Chat.css';
function Chat() {
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
        <p className="chat__message">
          <span className="chat__name">Danish Thomas</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
          This is a Message.  
        </p>
        <p className="chat__message chat__reciver">
          <span className="chat__name">Danish Thomas</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
          This is a Message.  
        </p>
        <p className="chat__message">
          <span className="chat__name">Danish Thomas</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
          This is a Message.  
        </p>
        <p className="chat__message">
          <span className="chat__name">Danish Thomas</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
          This is a Message.  
        </p>
        <p className="chat__message chat__reciver">
          <span className="chat__name">Danish Thomas</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
          This is a Message.  
        </p>
        <p className="chat__message">
          <span className="chat__name">Danish Thomas</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
          This is a Message.  
        </p>
        <p className="chat__message">
          <span className="chat__name">Danish Thomas</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
          This is a Message.  
        </p>
        <p className="chat__message chat__reciver">
          <span className="chat__name">Danish Thomas</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
          This is a Message.  
        </p>
        <p className="chat__message">
          <span className="chat__name">Danish Thomas</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
          This is a Message.  
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder='Type a message'
          type="text"/>
          <button type="submit">Send a message</button>
        </form>
      <MicIcon/>
      </div>
    </div>
  )
}

export default Chat