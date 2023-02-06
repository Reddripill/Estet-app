import React from 'react'
import styled from 'styled-components';
import { Container } from '../../utils/styles';

const Wrapper = styled.section`
	position: relative;
	/* margin-bottom: 64px; */
`

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
`


const Content = styled(Container)`
	position: relative;
	z-index: 2;
`
const Image = styled.div`
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
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

function Main() {
	return (
		<Wrapper>
			<Image>
				<img src="./images/home/mainBg.jpg" alt="Main BackGround" />
			</Image>
			<Content>
				<Title>
					Find Your <span>Dream Home</span> with Crypto
				</Title>
			</Content>
			<Overlay />
		</Wrapper>
	)
}

export default Main;