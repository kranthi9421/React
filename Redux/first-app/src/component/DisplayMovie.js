import React from 'react';



const Displayovie = (props)=>{

const renderView = ({datalist})=>{
   if(datalist){
    return datalist.map((data,index)=>{
       return(
           <div key={index}>
            <h2>{data.name}</h2>
           </div>
       )
    })
   }
}



    return(
        <div>
            <div>
                <h1>Movies List</h1>
                {renderView(props)}
            </div>
        </div>
    )
}
  export default Displayovie;