import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
    super(props);    
    // define the internal state of the component
    this.state = {
      count: this.props.start || 0
    }

    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    // this.alana = this.alana.bind(this);
  }

  up() {
    this.setState({
      count: this.state.count + 1
    });
  }

  down() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.up}>Add</button>
        <button onClick={this.down}>Subtract</button>

      </div>
    );
  }
}

export default App;
