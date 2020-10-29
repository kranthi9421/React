import React, { useEffect, useState } from 'react'

function Home() {

const [x,setX] = useState(0)
const [y,setY] = useState(0)

const logMouse = e => {
    console.log('Mouse roar')
    setX(e.clientX)
    setY(e.clientY)
}



useEffect(()=>{
  console.log('useEffect called')
  window.addEventListener('mousemove', logMouse)
},[])

    return (
        <div>
           Hooks x - {x} Y - {y}
        </div>
    )
}

export default Home
