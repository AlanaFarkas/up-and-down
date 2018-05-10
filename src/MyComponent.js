import React, { Component } from 'react';

class MyComponent extends Component {

	render () {

		const { name, test, myObject } = this.props

		return (
			<div>Hi {name}, I've imported a Component {test} and {myObject.key}</div>
		)
	}
}

export { MyComponent as default, MyComponent };
