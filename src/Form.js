import React, { Component } from 'react';
import styled from 'styled-components';

class InfoForm extends Component {

	handleClick(e) {
		e.preventDefault();
		console.log('clicked it');
	}

	render () {
		const { myInfo } = this.props

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