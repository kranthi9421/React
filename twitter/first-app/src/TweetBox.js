import React, { useState } from 'react';
import './TweetBox.css';
import {Avatar,Button} from '@material-ui/core';
import db from './firebase';


function TweetBox() {
 const [tweetMessage,setTweetMessage] = useState("");
 const [tweetImage,setTweetImage] = useState("");

 const sendTweet = e => {
     e.preventDefault();

     db.collection('posts').add({
         displayName:'Mounica sangem',
         username:'clever@Shakku',
         verified:true,
         text:tweetMessage,
         image:tweetImage,
         avatar:"https://www.kollywoodzone.com/data/media/1589/kaali_tamil_movie_heroine_anjali_photos_04.jpg"
       });
       setTweetMessage("");
       setTweetImage("");
 };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.kollywoodzone.com/data/media/1589/kaali_tamil_movie_heroine_anjali_photos_04.jpg"/>
                    <input value={tweetMessage} onChange={e=>setTweetMessage(e.target.value)} placeholder="What's happening?" type="text"/>
                </div>
                    <input placeholder="Enter image URL" value={tweetImage} onChange={e=>setTweetImage(e.target.value)} className="tweetBox__imageInput" type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
