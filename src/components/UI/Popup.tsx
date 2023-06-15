import React from 'react'
import styled from 'styled-components'
import { FCWidthChildren } from '../../utils/types';

interface IProps {
	isSmall?: boolean;
}

const Wrapper = styled.div<IProps>`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 150;
	display: ${props => props.isSmall && 'flex'};
	align-items: ${props => props.isSmall && 'center'};
	`
const PopupContainer = styled.div`
	background: rgba(0, 0, 0, 0.15);
	backdrop-filter: blur(40px);
	width: 100%;
	padding: 20px 0;
`
const PopupItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	padding: 40px;
	width: 560px;
	background: #0A0A0A;
	box-shadow: 0px 17px 33px rgba(255, 255, 255, 0.2);
	border-radius: 40px;
	margin: 0px auto;
`

const Popup: FCWidthChildren<IProps> = ({ children, isSmall }) => {
	return (
		<Wrapper isSmall={isSmall}>
			<PopupContainer>
				<PopupItem>
					{children}
				</PopupItem>
			</PopupContainer>
		</Wrapper>
	)
}

export default Popup