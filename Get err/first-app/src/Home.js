import React, { Component } from 'react';
import axios from 'axios';

 class Home extends Component {
 
    constructor(props){
       super(props)
      
       this.state={
         posts:[],
         errMsg:''
       }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({posts:res.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errMsg:'Error retreiving data'})
        })
    }
  
  
   render() {
   const {posts,errMsg} = this.state

     return (
            <div>
                <h1>List of posts</h1>
                {
                   posts.length ?
                   posts.map(post => <div key={post.id}><h3>{post.title}</h3></div>) : null
                 }
                 {errMsg ? <div>{errMsg}</div> : null}
            </div>
        )
    }
}

export default Home;
