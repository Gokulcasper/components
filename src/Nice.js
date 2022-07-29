import React from "react";

export default class Nice extends React.Component {
  render() {
    console.log(this.props);
    return <div>Nice Day {this.props.name}</div>;
  }
}
