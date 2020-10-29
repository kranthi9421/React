import React from 'react';
import { MyConsumer } from './MyContext';



const ComD = ()=>{
    return(
        <MyConsumer>
            {
                (context)=>{
                return <div>
                    <p>Name : {context.state.name}</p>
                    <p>age : {context.state.age}</p>
                    <button onClick={context.grow}>🍰Click</button>
                 </div>   
                }
            }
        </MyConsumer>
    )
}

export default ComD;