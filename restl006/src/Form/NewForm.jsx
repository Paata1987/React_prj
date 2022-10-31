import React, { Component } from 'react';

class NewForm extends Component {
    state = { 
       
     }


    state = { 
        value:""
    }

    handleChange(event){
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    render() {
        return (
            <div className='App'>
                <input type="button" value="" />
            </div>
        );
    }
}

export default NewForm;