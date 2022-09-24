import React from 'react'
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import {useState, useEffect} from "react";
import db from './firebase';
import {collection ,  onSnapshot,} from "firebase/firestore"
import FlipMove from "react-flip-move";



function Feed() {
 const [post, setpost] = useState([]);

 useEffect(() => {
  const ref = collection(db, "post");
  onSnapshot(ref,snapshot=>{
  setpost(snapshot.docs.map(doc => doc.data()))
 
 })

   
}, []);
 
  return (
    <div className='feed'>
        {/* header */}
        <div className="feed__header"> 
        <h2>home</h2>
        </div>
       
        {/* TweetBox */}
        <TweetBox/>
        {/* Post */}
        <FlipMove>
        {post.map(post=>(
           <Post displayname={post.displayname} username={post.username} verifed = {post.verifed} text ={post.text} avatar={post.avatar} image={post.image}/>
      
        ))}
        </FlipMove>
        {/* <Post displayname="virat kohli" username="viratkohli" verifed text="phir se form chala gaya yarr" avatar="https://c.ndtvimg.com/2022-09/jl3lq4jg_virat-kohli-twitter_625x300_21_September_22.jpg?output-quality=80&downsize=320:*" image="https://c.ndtvimg.com/2021-02/m7kjelsg_virat-kohli-meme-chennai-test-match_625x300_17_February_21.jpg"/>
        <post/> */}
      

    </div>
  )
}

export default Feed;