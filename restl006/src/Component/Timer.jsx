import React, { Component } from 'react';

class Timer extends Component {
    /* state = { 
        date: new Date()
     } ;

    callMe(){
        setInterval(() => {
           this.setState({date: new Date()})
        }, 1000);
    } */

    constructor(props){
        super(props);
        this.state = {
           counter: 0,
           message: "Click Me"
        };
    }


    onClick = () => {
        this.setState({
            counter: this.state.counter +1,
            message: "clicked"
        });
    }

    render() { 
        return(
            <div className='App'>
                <h5>{this.state.counter}</h5>
                <button onClick={this.onClick} className='btn btn-warning'>{this.state.message}</button>
                <p>{this.state.value}</p>
            </div>
        )





        
       /*  return (
            <div className='App'>
                <h1>Current time</h1>
                <h2>It is { this.state.date.toLocaleTimeString()}</h2>
                {this.callMe()}
            </div>
        ); */
    }
}
 
export default Timer;