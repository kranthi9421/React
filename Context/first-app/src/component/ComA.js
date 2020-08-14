import React, { Component } from 'react';
import ComB from './ComB';
import { MyProvider } from './MyContext';


class  ComA extends Component{
    state={
        name:'Kranthi',
        age:20
    }
  

    
render(){
    return(
        <MyProvider value={{state:this.state, grow:()=>this.setState({age : this.state.age + 1})}}>
            <ComB/>
        </MyProvider>
      )

}

  
}
export default ComA;