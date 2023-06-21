import React, { useState } from 'react'
import styled from 'styled-components'

interface IProps {
	options: string[];
	currentOption: string;
	setCurrentOption: (val: string) => void;
}

const DropDownElement = styled.div`
	position: relative;
	width: 100%;
`
const DropDonwOption = styled.div`
	font-family: 'Ubuntu';
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #fff;
	cursor: pointer;
	height: 40px;
	display: flex;
	align-items: center;
	padding: 0 16px;
	&._active {
		background-color: #0A0A0A;
	}
`
const DropDownVisible = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 48px;
	background-color: #0E0E0E;
	border-radius: 12px;
	padding: 0 16px;
	cursor: pointer;
`
const DropDownText = styled.div`
	font-family: 'Mulish';
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #fff;
`
const DropDownOptions = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s ease 0s;
	background-color: #0E0E0E;
	max-height: 200px;
	transform: translate(0, -20px);
	&._show {
		opacity: 1;
		visibility: visible;
		transform: translate(0, 0px);
	}
`
const DropDownArrow = styled.div`
	display: inline-block;
	border: solid #fff;
	border-width: 0 3px 3px 0;
	padding: 3px;
	transform: rotate(45deg);
	transition: all 0.3s ease 0s;
	&._active {
		transform: rotate(-135deg);
	}
`

const DropDown = ({ options, currentOption, setCurrentOption }: IProps) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const clickHandler = (item: string) => {
		setCurrentOption(item);
		setIsActive(false);
	}
	return (
		<DropDownElement>
			<DropDownVisible onClick={() => setIsActive(!isActive)}>
				<DropDownText>{currentOption}</DropDownText>
				<DropDownArrow className={isActive ? '_active' : ''} />
			</DropDownVisible>
			<DropDownOptions className={isActive ? '_show' : ''}>
				{options.map(option => (
					<DropDonwOption
						key={option}
						onClick={() => clickHandler(option)}
						className={currentOption === option ? '_active' : ''}
					>
						{option}
					</DropDonwOption>
				))}
			</DropDownOptions>
		</DropDownElement>
	)
}

export default DropDown