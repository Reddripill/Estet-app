import { useRef } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useIntersection from '../../utils/hooks/useIntersection';
import { Container } from '../../utils/styles';
import Button from './Button';
import NavLinks from '../NavLinks';

const HeaderElement = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 82px;
	&._scroll > div {
		background-color: rgba(48, 48, 48, 0.8);
	}
`
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
	transition: background-color 0.2s 0s;
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
	const target = useRef<HTMLDivElement>(null);
	const isVisible = useIntersection(target);
	return (
		<HeaderElement ref={target} className={!isVisible ? '_scroll' : ''}>
			<Wrapper>
				<HeaderContainer>
					<Logo to='/'>
						<img src="./images/icons/homeLogo.svg" alt="Logo" />
						Homeverse.io
					</Logo>
					<Actions>
						<NavLinks />
						<Link to='http://localhost:3000/auth/signin'>
							<Button isBlue={true}>
								Sign In
							</Button>
						</Link>
					</Actions>
				</HeaderContainer>
			</Wrapper>
		</HeaderElement>
	)
}

export default Header;