import React, { Component } from 'react';

class MyComponent extends Component {

	render () {

		const { name, test } = this.props

		return (
			<div>Hi {name}, I've imported a Component {test}</div>
		)
	}
}

export { MyComponent as default, MyComponent };
