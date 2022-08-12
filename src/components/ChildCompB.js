import React, { Component } from 'react';

class ChildCompB extends Component {
  render() {
    return <h2>Output: {this.props.text}</h2>;
  }
}

export default ChildCompB;
