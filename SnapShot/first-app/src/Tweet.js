import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import db from './firebase';

function Tweet() {

const [tweetMessage,setTweetMessage] = useState('');


const sendTweet = e => {
    e.preventDefault();


    db.collection('posts').add({
        displayName:'Tyson',
        username:'Mongo db',
        text:tweetMessage,
        title:'My React App'
        
    })
}


    return (
        <div>
           <form>
               <input type="text" placeholder="oops!!!" value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)}/><br/>
               <Button variant="contained" color="primary" type="submit" onClick={sendTweet}>Tweet</Button>
           </form>
        </div>
    
    )
}

export default Tweet;
