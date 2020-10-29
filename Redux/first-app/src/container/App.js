import React, { Component } from 'react';
import {movieList} from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DisplayMovie from '../component/DisplayMovie';

class App extends Component{
   componentDidMount(){
       this.props.movieList()
   }

   render(){
       return(
           <div>
               <h1>Redux</h1>
               <DisplayMovie datalist={this.props.mydata}/>
           </div>
       )
   }
}

function mapStateToprops(state){
    console.log(state)
    return{
        mydata:state.movies
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({movieList},dispatch)
}


export default connect(mapStateToprops,mapDispatchToProps)(App)


