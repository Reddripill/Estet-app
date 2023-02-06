import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ButtonItem = styled.button`
	color: #fff;
	padding: 0 24px;
	height: 42px;
	background: #1DAEFF;
	box-shadow: 0px 4px 40px #2D5981;
	border-radius: 8px;
`

function Button({ children }: PropsWithChildren) {
	return (
		<ButtonItem type='button'>
			{children}
		</ButtonItem>
	)
}

export default Button;