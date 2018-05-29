import React, { Component } from 'react';
import Button from './Button';

class NewApp extends Component {

    constructor(props) {
    super(props);    
    // define the internal state of the component
    this.state = {
      count: this.props.start || 0
    } 

    this.up = this.up.bind(this);
    this.message = this.message.bind(this);
  };


  up() {
    this.setState({
      count: this.state.count + 1
    });
  }


  message() {
    console.log("You got this");
  }

  render() {

    return (
      <div className="App">
      <Button onClick={this.answer} />
      </div>
    );
  }
}


export { NewApp as default, NewApp };

