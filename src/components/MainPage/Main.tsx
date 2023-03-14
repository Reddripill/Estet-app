import React from 'react'
import styled from 'styled-components';
import { Container, Image, Overlay } from '../../utils/styles';
import { Sections } from '../../utils/types';

interface IProps {
	id: Sections
}

const Wrapper = styled.section`
	position: relative;
`
const MainOverlay = styled(Overlay)`
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
`
const Content = styled(Container)`
	position: relative;
	z-index: 2;
`
const Title = styled.div`
	font-family: 'Montserrat';
	padding: 295px 0;
	color: #FFFBFB;
	font-weight: 700;
	font-size: 64px;
	line-height: 139.52%;
	letter-spacing: 0.03em;
	max-width: 865px;
	span {
		color: rgba(29, 174, 255, 1);
	}
`

const Main = ({ id }: IProps) => {
	return (
		<Wrapper id={id}>
			<Image>
				<img src="./images/home/mainBg.jpg" alt="Main BackGround" />
			</Image>
			<Content>
				<Title>
					Find Your <span>Dream Home</span> with Crypto
				</Title>
			</Content>
			<MainOverlay />
		</Wrapper>
	)
}


export default Main;