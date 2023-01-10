import './Sidebar.css';

import React from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <Avatar src="https://avatars.githubusercontent.com/u/94511485?s=400&u=a414fc47d43d80eabf9f3fbc4467e326c881daec&v=4"/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon>
            </DonutLargeIcon>
          </IconButton>
          <IconButton>
          <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon>
            </MoreVertIcon>
          </IconButton>
            
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon/>
          <input placeholder="Search or Start new Chat" type="text"/>
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
      </div>
    
  )
}

export default Sidebar