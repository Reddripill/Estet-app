import React, { PropsWithChildren } from 'react'
import styled from 'styled-components';
import { ButtonColorObjectType, ButtonColorType } from '../../utils/types';

interface IProps {
	color: ButtonColorType;
	clickHandler?: () => void;
	disabled?: boolean;
}

type StyleType = {
	color: string;
}

const buttonColor: ButtonColorObjectType = {
	dark: '#0E0E0E',
	gradient: 'linear-gradient(90deg, #FEAC6D 0%, #AE61ED 100%)',
	blue: '#1DAEFF',
	red: '#DD5E5E'
}

const ActionButtonItem = styled.button<StyleType>`
	height: 48px;
	background: ${props => props.color};
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
	min-width: 120px;
	&:disabled {
		opacity: 0.7;
    	cursor: auto;
	}
`

const ActionButton = ({ children, color, clickHandler, disabled }: PropsWithChildren<IProps>) => {
	return (
		<ActionButtonItem
			type='button'
			color={buttonColor[color]}
			onClick={clickHandler}
			disabled={disabled}
		>
			{children}
		</ActionButtonItem>
	)
}

export default ActionButton