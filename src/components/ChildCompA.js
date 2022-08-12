import React, { Component } from 'react';

class ChildCompA extends Component {
  constructor(props) {
    super(props);

    console.log(props); //{text: "", handleTextChange: ƒ}
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.props.handleTextChange(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.text}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}

export default ChildCompA;
