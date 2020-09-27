import React,{useEffect, useState} from 'react';
import Post from './Post';
import db from './firebase';
import Tweet from './Tweet';



function Home() {

const [posts,setPosts] = useState([]);

useEffect(()=>{
   db.collection('posts').onSnapshot(snapshot => (
       setPosts(snapshot.docs.map(doc => doc.data()))
   ))
},[]);




    return (
        <div>
            <Tweet/>


            {posts.map(post => (
                  <Post
                     displayName={post.displayName}
                     username={post.username}
                     text={post.text}
                     title={post.title}/>
            ))}
        </div>
       
    )
}

export default Home;
