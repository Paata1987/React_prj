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
        /* let name =event.target;
        console.log(event.nativeEvent.toElement); */
    }
    
    render() { 
        return (
            <div className='App'>
                <Buttonclick handleMe={this.handlerclick.bind(this)}
                 counter = {this.state.counter}/>
               {/*  <div className="child">
                    <p onMouseOver= { (e)=>{
                        console.log(e.target);
                    }} >Hover Me</p>
                </div> */}
                {/* <button className='btn btn-primary' onClick={this.handlerclick.bind(this)}>Increase Vaue By Clicking ME {this.state.counter}</button> */}
            </div>
        );
    }
}
 
export default Button;


let Buttonclick = (props) =>{
    return(
            <button 
            className='btn btn-primary' 
            onClick={props.handleMe}>
                Increase Vaue By Clicking ME 
                {props.counter}
            </button>
    );
}