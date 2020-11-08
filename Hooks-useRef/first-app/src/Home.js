import React, { useEffect, useRef, useState } from 'react';
import Focus from './Focus';

function Home() {
  const [timer,setTimer] = useState(0)

  const intervalRef = useRef()
  
  useEffect(()=>{
     intervalRef.current = setInterval(()=>{
      setTimer(prevTimer => prevTimer + 1)
   },1000)
   return()=>{
     clearInterval(intervalRef.current)
   }
      
  },[])


    
  return (
    <div>
      Hookes - {timer}
      <button onClick={()=> clearInterval(intervalRef.current)}>Clear Hooks</button>
      <Focus/>
    </div>
  )
}

export default Home
