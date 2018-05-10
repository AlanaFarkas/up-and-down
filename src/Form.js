import React, { Component } from 'react';
import App from './App';
import styled from 'styled-components';

class InfoForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
		}

		this.handleClick = this.handleClick.bind(this);
	}

	message() {
		console.log('You got this');
	}


	handleClick(e) {
		e.preventDefault();
		this.setState({
			clicked: this.state.clicked = true,
		});
			console.log('clicked');
	}

	render () {

	const { myInfo } = this.props;

		return (
			<form>
				<input type='text' name="name" placeholder="Enter your name" />
				<input type='text' name="age" placeholder="Enter your age" /> 
				<input type='text' name="residence" placeholder="Enter your borough" />
				<input type='submit' value='submit' onClick={this.handleClick}/> 	
			</form>
		);
	}
}


export { InfoForm as default, InfoForm };