import React from 'react'
import "./widgets.css"
import SearchIcon from '@mui/icons-material/Search';
import FlipMove from 'react-flip-move';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className='widgets_searchIcon'/>
      <input  placeholder="search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
 
        <TwitterTweetEmbed tweetId={"1548068332804272129"} />
  
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Naval"
          options={{ height: 400 }}
        />
        <TwitterShareButton
        url={"https://www.instagram.com/divyavert/"}
        options={{ text:"Follow him"}}
        />
      </div>
     </div>

  )
}

export default Widgets 