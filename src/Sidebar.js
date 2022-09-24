import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TagIcon from '@mui/icons-material/Tag';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material"

function Sidebar() {
  return (
    <div className='sidebar'>
          {/*Twiter icon*/}
          
         <TwitterIcon  className='twitter-icon'/>
          {/*sidebar option*/}
          <SidebarOption active = {true} Icon={HomeIcon} text="home"/>
           {/*sidebar option*/}
           <SidebarOption Icon={TagIcon} text="Explore"/>
           {/*sidebar option*/}
           <SidebarOption Icon={NotificationsIcon} text="Notification"/>
           {/*sidebar option*/}
           <SidebarOption Icon={MailOutlineIcon} text="Message"/>
           {/*sidebar option*/}
           <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark"/>
           {/*sidebar option*/}
           <SidebarOption Icon={ListAltIcon} text="Lists"/>
           {/*sidebar option*/}
           <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
           {/*sidebar option*/}
           <SidebarOption Icon={MoreHorizIcon} text="More"/>


            {/* button  */}
            <Button className='sidebar__tweet' variant="outlined" fullWidth>Tweet</Button>
    </div>
  
  )
}

export default Sidebar 