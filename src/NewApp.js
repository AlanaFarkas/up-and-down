import React, { Component } from 'react';
import Button from './Button';

class NewApp extends Component {

    constructor(props) {
    super(props);    
    // define the internal state of the component
      // count: this.props.start || 0
    this.state = {
      newGame: false,
      questionObject: [],
      gameOver: true,
      // score: 0/{questionObject.length()}
    } 

    // this.up = this.up.bind(this);
    // this.message = this.message.bind(this);
    // this.callApi = this.callApi.bind(this);

  };



  componentWillMount() {
      fetch('https://www.reddit.com/r/nyc.json')
      .then(results => {
        let alana = results.json();
        console.log(alana);
      }).then(data => {
        let jordan = data;
        console.log(jordan);
      });
  }



  // up() {
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // }


  // message() {
  //   console.log("You got this");
  // }

  render() {

    return (
      <div className="App">
        <Button text="+" />
        <Button text="-" />
      </div>
    );
  }
}


export { NewApp as default, NewApp };

      // <Button onClick={this.message} />
