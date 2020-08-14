import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';


const GalleryDisplay = (props)=>{
    var setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
 
 const renderGallery = ({gdata})=>{
    if(gdata){
        return(
            <Slider {...setting}>
                {gdata.map((item)=>{
                    return(
                        <Link to="/" className="slider-item">
                            <div className="image" style={{background:`url('/images/galleries/${item.images[0].img}')`}}>

                            </div>
                        </Link>
                    )
                })}
            </Slider>
        )
    }
 }
 
 
 
    return(
        <div className="home-gallery">
            <h2>Gallery Display</h2>
            {renderGallery(props)}
        </div>
    )
}


export default GalleryDisplay;