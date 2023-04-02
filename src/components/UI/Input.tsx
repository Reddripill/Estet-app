import React from 'react'
import { InputValidation } from '../../utils/types';
import styled from 'styled-components';

interface Props {
	inputEntity: InputValidation;
	name: string;
	placeholder?: string;
}

const InputItem = styled.div`
	display: flex;
	flex-direction: column;
`
const InputField = styled.input`
	height: 48px;
	background: #0E0E0E;
	border-radius: 12px;
	color: #FFFFFF;
	padding: 0 16px;
	font-family: 'Mulish';
	line-height: 20px;
	color: #FFFFFF;
`
const InputValidate = styled.label`
	font-family: 'Montserrat';
	padding-top: 5px;
	font-size: 12px;
	color: red;
	display: none;
	&._show {
		display: block;
	}
`

const Input = ({ inputEntity, name, placeholder }: Props) => {
	return (
		<InputItem>
			<InputField
				type="text"
				name={name}
				value={inputEntity.value}
				onChange={event => inputEntity.onChangeHandler(event)}
				onBlur={inputEntity.onBlurHandler}
				placeholder={placeholder}
			/>
			<InputValidate
				htmlFor={name}
				className={inputEntity.isError ? '_show' : ''}
			>
				This field is mandatory
			</InputValidate>
		</InputItem>
	)
}

export default Input