import React, { Component } from 'react';
import MyComponent from './MyComponent';
import logo from './logo.svg';
import './App.css';

const myInfo = {
  name: 'Alana Farkas',
  age: 29,
  residence: 'Brooklyn'
};

class App extends Component {

    constructor(props) {
    super(props);    
    // define the internal state of the component
    this.state = {
      count: this.props.start || 0
    }

 

    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.message = this.message.bind(this);
  };


  up() {
    this.setState({
      count: this.state.count + 1
    });
  }

  down() {
    this.setState({
      count: this.state.count - 1
    });
  }

  message() {
    console.log("You got this");
  }

  render() {
    
    const testProp = {
      testkey: 'farkas',
    };

    const test = "hello";

    return (
      <div className="App">
        <button onClick={this.up}>Add</button>
        <button onClick={this.down}>Subtract</button>
        <button onClick={this.message}>Secret Message</button>
        <MyComponent myInfo={myInfo} />
      </div>
    );
  }
}

export default App;
