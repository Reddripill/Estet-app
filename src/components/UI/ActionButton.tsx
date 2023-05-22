import React, { PropsWithChildren } from 'react'
import styled from 'styled-components';

interface IProps {
	isBlue?: boolean;
	clickHandler?: () => void;
}

type StyleType = {
	isBlue?: boolean;
}

const ActionButtonItem = styled.button<StyleType>`
	width: 130px;
	height: 48px;
	background-color: ${props => props.isBlue ? '#1DAEFF' : '#DD5E5E'};
	border-radius: 33px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 24px;
	font-family: 'Mulish';
	font-weight: 800;
	font-size: 10px;
	line-height: 20px;
	letter-spacing: 0.21em;
	text-transform: uppercase;
	color: #FFFFFF;
`

const ActionButton = ({ children, isBlue, clickHandler }: PropsWithChildren<IProps>) => {
	return (
		<ActionButtonItem
			type='button'
			isBlue={isBlue}
			onClick={clickHandler}
		>
			{children}
		</ActionButtonItem>
	)
}

export default ActionButton