import React, { useState } from 'react';


function Home() {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(true);
    
    return (
        <div>
            <input type="text" placeholder="Enter username" value={username} onChange={(e)=> setUsername(e.target.value)}/><br/><br/>
            <input type={showPassword ? 'text' : 'password'} placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <h2>{username}</h2>
            <h2>{showPassword ? password : '*'.repeat(password.length)}</h2>
            <button onClick={(e)=> setShowPassword(!showPassword)}>Show/Hide</button>
        </div>
    )
}

export default Home
