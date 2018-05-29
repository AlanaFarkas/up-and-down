import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(e) {
		e.preventDefault();
	}

	render () {

	// const { myInfo } = this.props;

		return (
			<button onClick={this.handleClick}>Ask Me</button> 	

		);
	}
};


export { Button as default, Button };