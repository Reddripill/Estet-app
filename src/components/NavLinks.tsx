import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '../utils/hooks/useNavigation';
import { Link } from 'react-router-dom';
const Container = styled.ul`
	display: flex;
	align-items: center;
	gap: 50px;
`

const Item = styled(Link)`
	position: relative;
	font-weight: 600;
	font-size: 14px;
	line-height: 139.52%;
	cursor: pointer;
	&._active {
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
				to='/#home'
				onClick={() => navigateHandler('home')}
				className={currentId === 'home' ? '_active' : ''}
			>
				Home
			</Item>
			<Item
				to='/#aboutUs'
				onClick={() => navigateHandler('aboutUs')}
				className={currentId === 'aboutUs' ? '_active' : ''}
			>
				About Us
			</Item>
			<Item
				to='/#otherProjects'
				onClick={() => navigateHandler('otherProjects')}
				className={currentId === 'otherProjects' ? '_active' : ''}
			>
				Other Projects
			</Item>
		</Container>
	)
}

export default NavLinks;