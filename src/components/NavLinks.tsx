import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigation } from '../utils/hooks/useNavigation';
import { Sections } from '../utils/types';

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
	const [active, setActive] = useState<string | null>();
	const navigateHandler = (id: Sections) => {
		const section = document.getElementById(id);
		if (section) {
			const sectionTop = section.offsetTop;
			setActive(id);
			window.scrollTo({
				top: sectionTop,
				behavior: 'smooth',
				left: 0
			})
		}
	}
	const currentActiveId = useNavigation(['home', 'aboutUs', 'otherProjects']);
	useEffect(() => {
		setActive(currentActiveId);
	}, [currentActiveId])
	return (
		<Container>
			<Item
				onClick={() => navigateHandler('home')}
				className={active === 'home' ? '_active' : ''}
			>
				Home
			</Item>
			<Item
				onClick={() => navigateHandler('aboutUs')}
				className={active === 'aboutUs' ? '_active' : ''}
			>
				About Us
			</Item>
			<Item
				onClick={() => navigateHandler('otherProjects')}
				className={active === 'otherProjects' ? '_active' : ''}
			>
				Other Projects
			</Item>
		</Container>
	)
}

export default NavLinks;