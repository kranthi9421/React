import React, { Component } from 'react';
import Header from './Header';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{
    constructor(){
        super()
        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keyword){
       const output = this.state.news.filter((data)=>{
            return data.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase())>-1
       })
       this.setState({filtered:output})

    }




    render(){
        console.log(this.state.news)
        return(
            <React.Fragment>
                     <Header userText={(userInput)=>{this.filterNews(userInput)}}/>
                     <NewsDisplay datalist={this.state.filtered}/>
            </React.Fragment>
         
       )
    }
}
export default Home;