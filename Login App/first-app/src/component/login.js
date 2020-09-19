import React, { Component, Fragment } from 'react';


const url = "http://localhost:5000/api/auth/login";



class Login extends Component{

  constructor(){
      super();

      this.state={
         
          email:'',
          password:''
      }
  }


  handleChangeEmail=(event)=>{
      this.setState({email:event.target.value})
  }

  handleChangePassword=(event)=>{
      this.setState({password:event.target.value})
  }

  handleSubmit=()=>{
      var data={
          
          "email":this.state.email,
          "password":this.state.password
      }

      fetch(url,{
          method:'POST',
          headers:{
              "Accept":'application/json',
              "Content-Type":'application/json'
          },
          body:JSON.stringify(data)
      })
      .then((res)=>res.json())
      .then((data)=>{
           localStorage.setItem('Token',data.token)
           this.props.history.push('/profile')
      })
  }




    render(){
        return(
           <Fragment>
              <div className="container">
                  <div className="panel panel-success">
                   <div className="panel-heading">
                      Login Form
                   </div>
                   <div className="panel-body">
                     <div className="form-group">
                         <label>Email</label>
                         <input type="text" className="form-control" value={this.state.email} onChange={this.handleChangeEmail}></input>
                     </div>
                  </div>
                  <div className="panel-body">
                     <div className="form-group">
                         <label>Password</label>
                         <input type="password" className="form-control" value={this.state.password} onChange={this.handleChangePassword}></input>
                     </div>
                   </div>
                   <button className="btn btn-warning" type="button" onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
           </Fragment>
        )
    }
}


export default Login;