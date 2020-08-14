import React, { Component } from 'react';
import './Header.css'


class Header extends Component{
      constructor(){
          super()
          this.state={
            title:'My ReactApp',
            keyword:'User Text Here'
          }
      }


   inputChange(event){
      this.setState({keyword:event.target.value?event.target.valu:'User Text Here'})
      this.props.userText(event.target.value)
   }    
  
      render(){
        return(
            <React.Fragment>
                    <header>
                        <p className="logo">{this.state.title}</p>
                        <center>
                            <input onChange={this.inputChange.bind(this)}/>
                        <p>{this.state.keyword}</p>
                        </center>
                    </header>
             </React.Fragment>  
        )
    }
}
export default Header;