import React, { Component } from 'react';

class Timer extends Component {
    state = { 
        date: new Date()
     } ;

    callMe(){
        setInterval(() => {
           this.setState({date: new Date()})
        }, 1000);
    }
    render() { 
        return (
            <div className='App'>
                <h1>Current time</h1>
                <h2>It is { this.state.date.toLocaleTimeString()}</h2>
                {this.callMe()}
            </div>
        );
    }
}
 
export default Timer;