import React, { useState } from 'react'

function Home() {

  const initialCount = 0
  const [count,setCount] = useState(initialCount)

 const incrementFive = ()=>{
     for(let i= 0; i< 5; i++){
         setCount(prevCount => prevCount + 1)
     }
 } 

    return (
        <div>
            <h3> Count : {count}</h3>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={incrementFive}>Increment 5</button>
        
        </div>
    )
}

export default Home
