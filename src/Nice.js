import React from "react";

export default class Nice extends React.Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
    this.state = {
      name: "Cyber Dude",
      subs: 500,
    };
  }
  clicked() {
    let incr = this.state.subs + 1;
    this.setState({
      ...this.setState,
      subs: incr,
    });
  }

  render() {
    return (
      <div>
        <p>Channel Name : {this.state.name}</p>
        <p>Subscribes : {this.state.subs}</p>
        <button onClick={this.clicked}>Subscribe</button>
      </div>
    );
  }
}
