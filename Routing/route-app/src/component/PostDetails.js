import React from 'react';
import {Link} from 'react-router-dom';

const PostDetails = (props)=>{
    console.log(props.match.params.topic)
    return(
        <div className='panel panel-warning'>
          <div className="panel-heading">
              Post Deatils
          </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h2>Post Details of {props.match.params.topic}</h2>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
                </div>
                <Link to='/post' className='btn btn-warning'>Back</Link>
            </div>
        </div>
    )
}


export default PostDetails;