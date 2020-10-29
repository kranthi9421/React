import React, { Component, Fragment } from 'react';


const url = "http://localhost:5000/api/register";



class Register extends Component{

  constructor(){
      super();

      this.state={
          name:'',
          email:'',
          password:''
      }
  }

  handleChangeName=(event)=>{
     this.setState({name:event.target.value})
  }

  handleChangeEmail=(event)=>{
      this.setState({email:event.target.value})
  }

  handleChangePassword=(event)=>{
      this.setState({password:event.target.value})
  }

  handleSubmit=()=>{
      var data={
          "name":this.state.name,
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
      .then(this.props.history.push('/login'))
  }




    render(){
        return(
           <Fragment>
              <div className="container">
                  <div className="panel panel-primary">
                   <div className="panel-heading">
                      Register Form
                   </div>
                   <div className="panel-body">
                     <div className="form-group">
                         <label>Name</label>
                         <input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName}></input>
                     </div>
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
                   <button className="btn btn-danger" type="button" onClick={this.handleSubmit}>Register</button>
                </div>
              </div>
           </Fragment>
        )
    }
}


export default Register;