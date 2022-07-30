import React from "react";

export default class Nice extends React.Component {
  constructor() {
    console.log("This is Constructor");
    super();
    this.clicked = this.clicked.bind(this);
    this.state = {
      name: "Cyber Dude",
      subs: 500,
    };
  }

  componentDidMount() {
    console.log("ComponentDidUpdate");
  }

  clicked() {
    let incr = this.state.subs + 1;
    this.setState({
      ...this.setState,
      subs: incr,
    });
  }

  render() {
    console.log("Render");
    return (
      <div>
        <p>Channel Name : {this.state.name}</p>
        <p>Subscribes : {this.state.subs}</p>
        <button onClick={this.clicked}>Subscribe</button>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("ComponentWillMount");
  }
}
