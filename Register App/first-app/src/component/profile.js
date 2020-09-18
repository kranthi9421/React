import React, { Component } from 'react';


const url ="http://localhost:5000/api/auth/userinfo";



class Profile extends Component{
   constructor(){
       super()

       this.state={
           user:''
       }
   }


handleLogout=()=>{
    localStorage.removeItem('Token')
    this.props.history.push('/login')
}


   render(){
       if(localStorage.getItem('Token') === null){
          this.props.history.push('/login')
       }
     localStorage.setItem('role',this.state.user.role)



       return(
           <div>
              <div className="panel panel-warning">
                <div className="panel-heading">
                    <h1>User Profile</h1>
                </div>
                <div className="panel-body">
                  <h1>Hi {this.state.user.name}</h1>
                  <h1>Your Email is {this.state.user.email}</h1>
                  <h1>Your Role is {this.state.user.password}</h1>
                </div>
                <div className="btn btn-info" onClick={this.handleLogout}> LogOut</div>
              </div>
           </div>
       )
   }

   componentDidMount(){
       fetch(url,{
           method:'GET',
           headers:{
               'X-access-token':localStorage.getItem('Token')
           }
       })
       .then((res)=>res.json())
       .then((data)=>{
           this.setState({
               user:data
           })
       })
   }
}

export default Profile;