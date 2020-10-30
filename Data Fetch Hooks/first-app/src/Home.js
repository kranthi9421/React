import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

const [post,setPost] = useState({});
const [id,setId] = useState(1)
const [err,setErr] = useState('')
const [clickButton,setClickButton] = useState(1)


useEffect(()=>{
    axios
       .get(`https://jsonplaceholder.typicode.com/posts/${clickButton}`)
       .then(res=>{
           console.log(res)
           setPost(res.data)
       })
       .catch(err=>{
           console.log(err)
           setErr('load')
       })
},[clickButton])


    return (
        <div>
            <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
            <button type="button" onClick={()=>setClickButton(id)}>Click</button>
            <div>{post.title}</div>
            <div>{err}</div>
        </div>
    )
}

export default Home
