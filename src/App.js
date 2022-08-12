import React, { Component } from 'react';
import './style.css';
import ChildCompA from './components/ChildCompA';
import ChildCompB from './components/ChildCompB';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(newText) {
    this.setState({
      text: newText,
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Lifting State up in ReactJS!</h1>
        <ChildCompA
          text={this.state.text}
          handleTextChange={this.handleTextChange}
        />
        <ChildCompB text={this.state.text} />
      </React.Fragment>
    );
  }
}

export default App;
