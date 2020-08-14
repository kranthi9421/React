import React,{Component} from 'react';

class Lifecycle extends Component{
    constructor(){
        super()

        this.state={
            title:'React Lifecycle'
        }
        console.log('Inside constructor')
    }


   componentWillMount(){
      console.log('Inside componentWillMount')
   } 


   componentWillUpdate(){
     console.log('Inside componentWillUpdate')
   }
  
   componentDidUpdate(){
     console.log('Inside componentDidUpdate')
   }

   shouldComponentUpdate(nextProps,nextState){
    console.log("Inside shouldComponentUpdate")
     if(nextState.title===this.state.title){
         return false
     }else{
         return true
     }
   }


    render(){
        console.log('Inside render')
        return(
            <div>
                    <h1>{this.state.title}</h1>
                    <div className="btn btn-success"
                    onClick={()=>this.setState({title:'something else'})}>
                        click  
                    </div>
            </div>
        )
    }

    componentDidMount(){
        console.log('Inside  componentDidMount')
    }

    componentWillUnmount(){
        alert('you are leaving the page')
    }
}

export default Lifecycle;