import React, { Component } from 'react';

class Button extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
     //   this.handlerMe = this.handlerclick;
    }

  /*   Handler(event){
        console.log(this, event.target);
    } */

    handlerclick(event){
        this.setState({counter:++this.state.counter});
    }
    
    render() { 
        return (
            <div className='App'>
                <Buttonclick handler={this.handlerclick.bind(this)} />
                <Counter value={this.state.counter}/>
            </div>
        );
    }
}

export default Button;


let Buttonclick = (props) =>{
    return(
            <button className='btn btn-primary' onClick={props.handler}>
                Click Me!
            </button>
    );
}


class Counter extends Component{
    render(){
        return(
            <div>
                <em>Clicked {this.props.value} times</em>
            </div>
        );
    }
}