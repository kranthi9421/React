import React, { useEffect, useState } from 'react'

function Home() {

const [count,setCount] = useState(0)
const [name,setName] = useState('')

useEffect(()=>{
   console.log('update')
    document.title = `You clicked ${count} times` 
},[count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
             <h2>{count}</h2>
            <button onClick={()=> setCount(count + 1)} className="btb btn-success">Click</button>
        </div>
    )
}

export default Home
