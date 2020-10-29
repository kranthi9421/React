import React, { Component } from 'react';
import Header from './Header';



const url = "  http://localhost:8900/artists";


class formComponent extends Component{
    constructor(){
        super()
       
        this.state={
           name:'',
           cover:'',
           bio:'',
           genre:''
        }
           this.handleChangeName = this.handleChangeName.bind(this)
           this.handleChangeCover = this.handleChangeCover.bind(this)
           this.handleChangeBio = this.handleChangeBio.bind(this)
           this.handleChangeGenre = this.handleChangeGenre.bind(this)
           this.handleSubmit = this.handleSubmit.bind(this)
        }

      handleChangeName(event){
          this.setState({name:event.target.value})
      }
      handleChangeCover(event){
        this.setState({cover:event.target.value})
     }
    handleChangeBio(event){
        this.setState({bio:event.target.value})
    }
    handleChangeGenre(event){
        this.setState({genre:event.target.value})
    }
    handleSubmit(event){
        var random = Math.floor(Math.random()*10000);
        var data={
            "id":random,
            "name":this.state.name,
            "cover":this.state.cover,
            "bio":this.state.bio,
            "genre":this.state.genre
        }  
        
        fetch(url,{
            method:'POST',
            headers:{
              'Accept':'appliaction/json',
              'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/'))
    }


       render(){
           return(
             <React.Fragment>
                    <Header/>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Artists Forms
                        </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control"
                                        value={this.state.name}
                                        onChange={this.handleChangeName}>
                                        </input>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Cover</label>
                                        <input type="text" className="form-control"
                                        value={this.state.cover}
                                        onChange={this.handleChangeCover}>
                                        </input>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Bio</label>
                                        <input type="text" className="form-control"
                                        value={this.state.bio}
                                        onChange={this.handleChangeBio}>
                                        </input>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <label>Genre</label>
                                        <input type="text" className="form-control"
                                        value={this.state.genre}
                                        onChange={this.handleChangeGenre}>
                                        </input>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.handleSubmit}>
                                    Submit
                                </button>
                            </div>
             </React.Fragment>
           )
       }
}

export default formComponent;