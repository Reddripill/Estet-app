import React from 'react'
import styled, { keyframes } from 'styled-components';


const spinner = keyframes`
	0% {transform: rotate(0deg)}
	100% {transform: rotate(360deg)}
`

const SpinnerContainer = styled.div`
	height: 100px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const SpinnerItem = styled.div`
	width: 50px;
	height: 50px;
	border: 10px solid #161616;
	border-radius: 50%;
	border-top: 10px solid red;
	animation: ${spinner} 1.5s linear infinite;
`

const Spinner = () => {
	return (
		<SpinnerContainer>
			<SpinnerItem>
			</SpinnerItem>
		</SpinnerContainer>
	)
}

export default Spinner;