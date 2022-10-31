import React, { Component } from "react";

class Order extends Component {
  constructor(props) {
    super(props);
    this.handleChanges = this.handleCheckboxChanges.bind(this);
    this.state = {
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
      },
    };
  }

  handleCheckboxChanges(event) {
    let obj = Object.assign(this.state.checkboxGroup);
    obj[event.target.value] = event.target.checked;
    this.setState({
      checkboxGroup: obj,
    });
    console.log(this.state.checkboxGroup);
  }

  render() {
    return (
      <div className="App">
        <h2 className="p-2">Chekbox</h2>

        <label>
          <input
            type="checkbox"
            checked={this.state.checkboxGroup.node}
            className="m-2"
            name="chekcboxGroup"
            value="node"
            onChange={this.handleChanges}
          />
          Node
        </label>

        <label>
          <input
            type="checkbox"
            checked={this.state.checkboxGroup.react}
            className="m-2"
            name="chekcboxGroup"
            value="react"
            onChange={this.handleChanges}
          />
          React
        </label>

        <label>
          <input
            type="checkbox"
            checked={this.state.checkboxGroup.express}
            className="m-2"
            name="chekcboxGroup"
            value="express"
            onChange={this.handleChanges}
          />
          Express
        </label>
      </div>
    );
  }
}

export default Order;
