import React from "react";

export default class Nice extends React.Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <div>Nice Day {this.props.name}</div>
        <button onClick={this.clicked}>Click Me</button>
      </div>
    );
  }
}
