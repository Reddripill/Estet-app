import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
	isBlue: boolean;
	clickHandler?: () => void;
}

const ButtonItem = styled.button<Props>`
	color: #fff;
	padding: 0 24px;
	height: 42px;
	background: ${props => props.isBlue ? '#1DAEFF' : 'linear-gradient(90deg, #FEAC6D 0%, #AE61ED 100%)'};
	transition: all 0.3s 0s;
	border-radius: 8px;
	&:hover {
		box-shadow: ${props => props.isBlue ? '0px 4px 40px #2D5981' : '0px 17px 33px rgba(255, 255, 255, 0.2);'};
	}
`

function Button({ children, isBlue, clickHandler }: PropsWithChildren<Props>) {
	return (
		<ButtonItem
			type='button'
			isBlue={isBlue}
			onClick={() => {
				if (clickHandler) clickHandler();
			}}
		>
			{children}
		</ButtonItem>
	)
}

export default Button;