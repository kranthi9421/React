import React from 'react';
import LazyLoad from 'react-lazyload';

const NewsDisplay = (props)=>{
  
const renderlist = ({datalist})=>{
   return datalist.map((data,i)=>{
       return (

           <LazyLoad height={200} throttle={500} key={i}>
                  <React.Fragment >
                      <h1>{data.title}</h1>
                      <p>{data.feed}</p>
                      <img src={data.imageUrl} alt="e"/>
                  </React.Fragment>
           </LazyLoad>
       )
   })
}

    return(
      <div>
        {renderlist(props)}
      </div>
    )
}

export default NewsDisplay;