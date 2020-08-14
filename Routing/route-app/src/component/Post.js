import React from 'react';
import {Link} from 'react-router-dom';

const Post = ()=>{
    return(
        <div className='panel panel-success'>
          <div className="panel-heading">
              Post
          </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h2>Post Page</h2>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
                </div>
                  <h3>JavaScript</h3>
                  <Link to="/posts/JavaScript">Details</Link>
                  <h3>React</h3>
                  <Link to="/posts/React">Deatils</Link>
                  <h3>Node</h3>
                  <Link to="/posts/Node">Details</Link>
                  <h3>Angular</h3>
                  <Link to="/posts/Angular">Details</Link>
            </div>
        </div>
    )
}


export default Post;