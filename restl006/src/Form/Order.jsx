import React, { Component } from "react";

class Order extends Component {
  state = {
    size: "Medium",
  };

  handleChange(event) {
    this.setState({
      size: event.target.value,
    });
  }

  handelSubmit(event) {
    console.log(`You have Selected ${this.state.size} Pizza`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h2 className="p-4">Select Pizza Size</h2>
        <form onSubmit={this.handelSubmit.bind(this)}>
          <ul className="list-inline">
            <li>
              <label>
                <input
                  type="radio"
                  hecked={this.state.size == "Small"}
                  onChange={this.handleChange.bind(this)}
                  value="small"
                  name="radioGroup"
                />
                Small
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  checked={this.state.size == "Medium"}
                  onChange={this.handleChange.bind(this)}
                  value="Medium"
                  name="radioGroup"
                />
                Medium
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  hecked={this.state.size == "Large"}
                  onChange={this.handleChange.bind(this)}
                  value="Large"
                  name="radioGroup"
                />
                Large
              </label>
            </li>
          </ul>
          <button type="submit" className="btn btn-danger">
            Make a Order
          </button>
        </form>
      </div>
    );
  }
}

export default Order;
