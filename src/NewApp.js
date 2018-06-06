import React, { Component } from 'react';
import Button from './Button';



class NewApp extends Component {

    constructor(props) {
    super(props);    
    // define the internal state of the component
      // count: this.props.start || 0
    this.state = {
      tally: 0,
      title: '',
      // score: 0/{questionObject.length()}
    } 

    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    // this.message = this.message.bind(this);
    // this.callApi = this.callApi.bind(this);

  };


  componentWillMount() {
      fetch('https://www.reddit.com/r/nyc.json')
      .then(results => {
        return results.json();
      }).then(data => {
        let articles = data['data']['children'];
        const titles = articles.map((article) => 
          console.log(article['data']['title']),
          // <li key={article['data']['title']}>{article['data']['title']}</li>
        );
        
        // return data;
        // return (
        //   <ul>{titles}</ul>
        // )
      });
  }



  upVote() {
    this.setState({
      tally: this.state.tally + 1
    });
  }

  downVote() {
    this.setState({
      tally: this.state.tally - 1
    });
  }


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
