import React, { Component } from 'react';
import styled from 'styled-components';

class MyComponent extends Component {

	render () {
		const { myInfo } = this.props
		
		return (
			<InfoDiv>Hi {myInfo.name}, you are {myInfo.age} years old and you live in {myInfo.residence} </InfoDiv>
		)
	}
}

const InfoDiv = styled.div`
	border: 1px red solid;
`;

export { MyComponent as default, MyComponent };
