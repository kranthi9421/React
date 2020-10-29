import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import Albums from './Albums';

const url = "  http://localhost:8900/artists";


class Artist extends Component{
     constructor(props){
         super(props)

          this.state={
              details:''
          }         
     }
    render(){
          console.log(this.props.match.params.id)

          var {details} = this.state
       return(
        <div>
           <Header/>
           <div className="artist_bio">
               <div className="artist_image">
                   <span style={{
                    background:`url('/images/covers/${details.cover}.jpg')`
                   }}>
                </span>
              </div>
             <h3>{details.name}</h3>
             <div className="bio_text">
                 {details.bio}
             </div>
             <Albums albumlist={details.albums}/>
           </div>
        </div>
       )
    }
   /*  componentDidMount(){
         axios.get(`${url}/${this.props.match.params.id}`)
         .then(res=>{this.setState({details:res.data})})
     }*/

     async componentDidMount(){
         const res = await axios.get(`${url}/${this.props.match.params.id}`)
          this.setState({details:res.data})
     }

}

export default Artist;