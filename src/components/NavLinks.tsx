import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
	& > .active {
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
	return (
		<Container>
			<Item>
				<NavLink
					to='/'
				>
					Home
				</NavLink>
			</Item>
			<Item>
				<NavLink to='/about'>About Us</NavLink>
			</Item>
			<Item>
				<NavLink to='/projects'>Other Projects</NavLink>
			</Item>
		</Container>
	)
}

export default NavLinks;