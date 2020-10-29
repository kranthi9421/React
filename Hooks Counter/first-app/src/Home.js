import React, { useEffect, useState } from 'react';

function Home() {

const [count,setCount] = useState(0)
const [name,setName] = useState('')

useEffect(()=>{
    console.log('useEffect - updating document title')
    document.title = `You clicked ${count} times`
},[name])



 return (
        <div>
             <input type="text" value={name} onChange={e => setName(e.target.value)}/>
             <h2>{count}</h2>
            <button onClick={()=> setCount(count + 1)}>Click</button>
        </div>
    )
}

export default Home;
