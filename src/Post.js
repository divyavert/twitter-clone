import React, { forwardRef} from 'react'
import "./post.css"
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef(({
    displayname,
    username,
    verifed,
    timestamp,
    text,
    image,
    avatar 
}, ref) => {
  return (
    <>
        <div className='post' ref={ref}>
    <div className='post__avatar'>
    <Avatar src={avatar}/>

    </div>
  
    <div className="post_body">
        <div className="post__header">
            <div className="post_headerText">
                      
                <h3>{displayname+" "} <span className='post__headerSpeacial'>{verifed && <VerifiedIcon className='badge'/>}@{username}</span  > </h3>
            </div>
            <div className="header__headerDescrpition">
                <p>{text}</p>
            </div>
            <img className='immm' src={image} alt="" />
        <div className="post_footer">
        <ChatBubbleOutlineIcon/>
        <RepeatIcon/>
        <FavoriteBorderIcon/>
        <PublishIcon/>
        </div>

        </div>
    </div>
    </div>
    </>

  )
})

export default Post