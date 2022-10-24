import React, { Component } from 'react';

class Button extends Component {

    constructor(props){
        super(props);
        this.handlerMe = this.Handler.bind(this);
    }

    Handler(event){
        console.log(this, event.target);
    }
    
    render() { 
        return (
            <div className='App'>
                <div className="child">
                    <p onMouseOver= { (e)=>{
                        console.log(e.target);
                    }} >Hover Me</p>
                </div>
                {/* <button className='btn btn-warning' onClick={this.handlerMe}>Save</button> */}
            </div>
        );
    }
}
 
export default Button;