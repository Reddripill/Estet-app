import React from 'react'
import styled from 'styled-components'
import { FCWidthChildren } from '../../utils/types';

interface IProps {
	isSmall?: boolean;
	clickHandler: () => void;
	title: string;
	width?: number;
}
type ContainerType = {
	isSmall?: boolean;
}
type PopupItemType = {
	width?: number;
}

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	left: 0;
	top: 0;
	z-index: 150;
	cursor: pointer;
`
const PopupContainer = styled.div<ContainerType>`
	background: rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(40px);
	width: 100%;
	height: 100%;
	padding: 20px 0;
	display: ${props => props.isSmall && 'flex'};
	align-items: ${props => props.isSmall && 'center'};
`
const PopupItem = styled.div<PopupItemType>`
	display: flex;
	flex-direction: column;
	gap: 40px;
	padding: 40px;
	width: ${props => props.width ? props.width + 'px' : '560px'};
	background: #0A0A0A;
	box-shadow: 0px 17px 33px rgba(255, 255, 255, 0.2);
	border-radius: 40px;
	margin: 0px auto;
	cursor: auto;
`
const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Title = styled.div`
	font-family: 'Mulish';
	font-weight: 700;
	font-size: 36px;
	line-height: 40px;
	color: #FFFFFF;
`
const Cross = styled.div`
	height: 24px;
	width: 24px;
	cursor: pointer;
	position: relative;
	&::before,
	&::after {
		content:'';
		position: absolute;
		top: 50%;
		left: 50%;
		height: 1px;
		width: 24px;
		background-color: #fff;
	}
	&::before {
		transform: translate(-50%) rotate(-45deg)
	}
	&::after {
		transform: translate(-50%) rotate(45deg)
	}
`

const Popup: FCWidthChildren<IProps> = ({ children, isSmall, clickHandler, title, width }) => {
	return (
		<Wrapper>
			<PopupContainer isSmall={isSmall}>
				<PopupItem width={width}>
					<Header>
						<Title>{title}</Title>
						<Cross onClick={clickHandler}></Cross>
					</Header>
					{children}
				</PopupItem>
			</PopupContainer>
		</Wrapper>
	)
}

export default Popup