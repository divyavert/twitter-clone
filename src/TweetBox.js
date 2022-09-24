import React from 'react'
import { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material'
import db from './firebase'
import { doc, setDoc, collection } from "firebase/firestore"; 
function TweetBox() {
  const [TweetMessage, setTweetMessage] = useState("")
  const [TweetImage, setTweetImage] = useState("")


 const sendTweet = e =>{
  e.preventDefault();
  const ref = doc(collection(db, "post"));
  const av = "https://media.vogue.co.uk/photos/60538d2bd4f5db6cd813d095/2:3/w_1920,c_limit/Justin-Bieber-vogue-credit-Mike-Rosenthal-1.jpg"
  setDoc(ref,{
    displayname: "divya panchori",
    username: "divyapanchori",
    verifed: false,
    text: TweetMessage,
    image: TweetImage,
    avatar:av
  });
 setTweetImage("");
 setTweetMessage("");
 };


  return (
    <div className='TweetBox'>
        <form action="">
            <div className="TweetBox__Input">
                <Avatar src="https://media.vogue.co.uk/photos/60538d2bd4f5db6cd813d095/2:3/w_1920,c_limit/Justin-Bieber-vogue-credit-Mike-Rosenthal-1.jpg"/>      
                <input onChange={e => setTweetMessage(e.target.value)} value={TweetMessage} placeholder="What's happening?" type="text" />
            </div>
            <input onChange={e => setTweetImage(e.target.value)} value={TweetImage} className='TweetBox__ImageInput' placeholder="Enter image url" type="text" />
            <Button onClick={sendTweet} type='submit' className='Tweet__btn'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox