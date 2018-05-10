import React, { Component } from 'react';

class MyComponent extends Component {

	render () {
		const { myInfo } = this.props
		
		return (
			<div>Hi {myInfo.name}, you are {myInfo.age} years old and you live in {myInfo.residence} </div>
		)
	}
}

export { MyComponent as default, MyComponent };
