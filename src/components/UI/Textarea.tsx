import React from 'react'
import styled from 'styled-components';

interface Props {
	placeholder?: string;
	autofocus?: boolean;
	autoComplete?: string;
	classname?: string;
	value: string;
	setValue: (str: string) => void;
	heigth: number;
}

type StyleType = {
	height: number;
}

const TextareaItem = styled.div`
	display: flex;
	flex-direction: column;
`
const TextareaField = styled.textarea<StyleType>`
	height: ${props => `${props.height}px`};
	background: #0E0E0E;
	border-radius: 12px;
	color: #FFFFFF;
	padding: 16px;
	font-family: 'Mulish';
	line-height: 20px;
	color: #FFFFFF;
	resize: none;
	border-radius: 6px;
`

const Textarea = ({ placeholder, autofocus, autoComplete, value, setValue, heigth, classname }: Props) => {
	return (
		<TextareaItem className={classname}>
			<TextareaField
				value={value}
				onChange={event => setValue(event.target.value)}
				placeholder={placeholder}
				autoFocus={autofocus}
				autoComplete={autoComplete}
				height={heigth}
			/>
		</TextareaItem>
	)
}

export default Textarea