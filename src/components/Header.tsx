import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../utils/styles';
import Button from './Button';
import NavLinks from './NavLinks';

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	min-height: 82px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const HeaderContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	min-height: 82px;
`

const Logo = styled(Link)`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-family: 'Wellfleet';
	img {
		max-width: 30px;
	}
`

const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;
`

function Header() {
	return (
		<header>
			<Wrapper>
				<HeaderContainer>
					<Logo to='/'>
						<img src="./images/icons/homeLogo.svg" alt="Logo" />
						Homeverse.io
					</Logo>
					<Actions>
						<NavLinks />
						<Button>
							Sign In
						</Button>
					</Actions>
				</HeaderContainer>
			</Wrapper>
		</header>
	)
}

export default Header;