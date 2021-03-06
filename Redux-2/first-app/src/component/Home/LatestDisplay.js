import React from 'react';
import {Link} from 'react-router-dom';


const LatestDisplay = (props)=>{

const renderLatest = ({ldata})=>{
    if(ldata){
        return ldata.map((data,index)=>{
            return(
               <Link to={`/details/${data.id}`} className="item" key={index}>
                 <div className="image_cover" style={{background:`url('images/articles/${data.img}')`}}>
                    <div className="description">
                        <span>{data.category}</span>
                        <div>{data.title}</div>
                    </div>
                 </div>
               </Link>
            )
        })
    }
}


    return(
      <div className="home-latest">
        {renderLatest(props)}
      </div>
    )
}


export default LatestDisplay;