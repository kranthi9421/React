import React, { useState } from 'react'
import useInput from './useInput'

function Home() {
 
    const [firstName,bindFirstName,resetFirstName ] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')

 
 
   const handleSubmit = e => {
        e.preventDefault()
       alert(`Hello ${firstName} ${lastName}`)
       resetFirstName()
       resetLastName()
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>FirstName :</label>
                <input type="text" {...bindFirstName}/>
               <div>
                   <label>Last Name :</label>
                   <input type="text" {...bindLastName}/>
               </div>
               <button>Submit</button>
            </form>
        </div>
    )
}

export default Home
