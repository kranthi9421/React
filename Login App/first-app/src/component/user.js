import React, { Component } from 'react';
import UserDisplay from './userDisplay';


const url = "http://localhost5000/api/auth/users"


class User extends Component{
   constructor(){
       super();

       this.state={
           users:''
       }
   }

   render(){
    if(localStorage.getItem('Token') === null){
        this.props.history.push('/login')
     }else if(localStorage.getItem('Token') != null && localStorage.getItem('role') != 'admin'){
         this.props.history.push('/profile')
     }



       return(
           <div>
               <UserDisplay userData={this.state.users}/>
           </div>
       )
   }

   componentDidMount(){
       fetch(url,{
           method:'GET'
       })
       .then((res)=>res.json())
       .then((data)=>{
           this.setState({
               users:data
           })
       })
   }
}

export default User;