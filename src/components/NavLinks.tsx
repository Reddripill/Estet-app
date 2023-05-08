import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '../utils/hooks/useNavigation';
const Container = styled.ul`
	display: flex;
	align-items: center;
	gap: 50px;
`

const Item = styled.li`
	position: relative;
	font-weight: 600;
	font-size: 14px;
	line-height: 139.52%;
	pointer-events: all;
	cursor: pointer;
	&._active {
		pointer-events: none;
		&::before {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			background-color: #1DAEFF;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			transform: translate(-50%, 0);
		}
	}
`

function NavLinks() {
	const { currentId, navigateHandler } = useNavigation(['home', 'aboutUs', 'otherProjects']);
	return (
		<Container>
			<Item
				onClick={() => navigateHandler('home')}
				className={currentId === 'home' ? '_active' : ''}
			>
				Home
			</Item>
			<Item
				onClick={() => navigateHandler('aboutUs')}
				className={currentId === 'aboutUs' ? '_active' : ''}
			>
				About Us
			</Item>
			<Item
				onClick={() => navigateHandler('otherProjects')}
				className={currentId === 'otherProjects' ? '_active' : ''}
			>
				Other Projects
			</Item>
		</Container>
	)
}

export default NavLinks;