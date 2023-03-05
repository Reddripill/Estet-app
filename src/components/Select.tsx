import React, { useState } from 'react'
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';

interface SelectProps {
	options: string[];
	icon: JSX.Element | JSX.Element[];
	state: string;
	stateChanger: (item: string) => void;
}

const SelectWrapper = styled.div`
	user-select: none;
`

const SelectItem = styled.div`
	height: 38px;
	width: 150px;
	background-color: rgba(255, 251, 251, 1);
	border-radius: 13.5913px;
	padding: 0 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	cursor: pointer;
	color: #000;
	transition: border-radius .3s ease-in-out .15s;
	&._active {
		border-radius: 13.5913px 13.5913px 0 0;
		transition: border-radius 0s ease-in-out 0s;
	}
`
const SelectBody = styled.div`
	display: flex;
	align-items: center;
	gap: 7px;
`

const Arrow = styled(MdArrowForwardIos)`
	font-size: 12px;
	transform: rotate(90deg);
	transition: transform 0.3s 0s;
	&._active {
		transform: rotate(-90deg);
	}
`

const Text = styled.div`
	font-size: 16px;
`

const SelectSubtitle = styled.ul`
	width: 100%;
	background-color: rgba(255, 251, 251, 1);
	border-radius: 0 0 13.5913px 13.5913px;
	transition: all 0.3s ease 0s;
	max-height: 0px;
	overflow: hidden;
	transition: max-height 0.3s ease-in-out 0s;
	&._show {
		max-height: 108px;
	}
`

const SelectOption = styled.li`
	color: #000;
	cursor: pointer;
	padding: 10px 0;
	&:last-child {
		border-radius: 0 0 12px 12px;
	}
	&._active {
		background-color: rgba(44, 43, 43, 1);
		color: #fff;
	}
`

const SelectOptionText = styled.div`
	margin-left: 37px;
`


const Select: React.FC<SelectProps> = ({ options, icon, state, stateChanger }) => {
	const [active, setActive] = useState(false);
	const [currentIcon, setCurrentIcon] = useState<number>(0);

	const selectOptionHandler = (event: React.MouseEvent<HTMLLIElement>, item: string) => {
		const index = options.findIndex(option => option === item);
		stateChanger(options[index]);
		setCurrentIcon(index);
		setActive(false);
	}
	return (
		<SelectWrapper>
			<SelectItem onClick={() => setActive(prev => !prev)} className={active ? '_active' : ''}>
				<SelectBody>
					{!Array.isArray(icon) ?
						icon :
						icon[currentIcon]
					}
					<Text>
						{state}
					</Text>
				</SelectBody>
				<Arrow className={active ? '_active' : ''} />
			</SelectItem>
			<SelectSubtitle className={active ? '_show' : ''}>
				{options.map((item, index) => (
					<SelectOption
						key={index}
						onClick={(event) => selectOptionHandler(event, item)}
						className={state === item ? '_active' : ''}
					>
						<SelectOptionText>
							{item}
						</SelectOptionText>
					</SelectOption>
				))
				}
			</SelectSubtitle>
		</SelectWrapper>
	)
}

export default Select;