import React, { Component } from "react";

class Order extends Component {
  constructor(props) {
    super(props);

    this.handleChanges = this.handlerSelected.bind(this);
    this.handlerSubmit = this.handlerSubmited.bind(this);
    this.state = {
      selectedValue: "Orange",
    };
  }

  handlerSelected(event) {
    this.setState({
      selectedValue: event.target.value,
    });
  }

  handlerSubmited(event) {
    console.log(this.state.selectedValue);
  }

  render() {
    return (
      <div className="App px-5">
        <h2 className="p-3">Select Otion from the List</h2>
        <form onSubmit={this.handlerSubmit}>
          <select
            className="form-control m-4"
            value={this.state.selectedValue}
            onChange={this.handleChanges}
          >
            <option value="kiwi">Kiwi</option>
            <option value="Orange">Orange</option>
            <option value="Mango">Mango</option>
          </select>
          <input type="submit" value="submit" className="btn btn-warning m-4" />
        </form>
      </div>
    );
  }
}

export default Order;
