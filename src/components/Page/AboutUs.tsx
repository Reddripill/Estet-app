import React from 'react';
import styled from 'styled-components';
import { Container, Image, Overlay, Text, Title } from '../../utils/styles';
import Button from '../Button';

const Wrapper = styled.div`
	position: relative;
	flex: 0 0 735px;
	width: 100%;
`
const AboutUsOverlay = styled(Overlay)`
	background: linear-gradient(0deg, rgba(27, 27, 27, 0.4), rgba(27, 27, 27, 0.4));
`
const AboutUsOverlayTop = styled(Overlay)`
	height: 220px;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
	transform: rotate(-180deg);
`
const AboutUsOverlayLeft = styled(Overlay)`
	width: 736px;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
	transform: matrix(0, -1, -1, 0, 0, 0);
`
const AboutUsOverlayBottom = styled(Overlay)`
	height: 220px;
	bottom: 0;
	top: auto;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
	transform: matrix(-1, 0, 0, 1, 0, 0);
`
const AboutUsOverlayRight = styled(Overlay)`
	width: 736px;
	right: 0;
	left: auto;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
	transform: matrix(0, 1, 1, 0, 0, 0);
`
const AboutUsContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	position: relative;
	z-index: 5;
`
const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	max-width: 666px;
`
const Features = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
`
const FeaturesItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	width: 270px;
`
const FeaturesTitle = styled(Title)`
	color: rgba(29, 174, 255, 0.8);
	line-height: 39px;
`
const FeaturesSubText = styled(Text)`
	color: rgba(255, 251, 251, 0.65);
	line-height: 20px;
`
const FeaturesText = styled(Text)`
	text-align: center;
	color: rgba(255, 251, 251, 0.65);
`

function AboutUs() {
	return (
		<Wrapper>
			<Image>
				<img src="./images/home/aboutUsBg.jpg" alt="About Us Bg" />
			</Image>
			<AboutUsContainer>
				<Content>
					<Title>About Us</Title>
					<Text>
						Homeverse.io is a gated community with a great location. Located downtown, you’re within walking distance of Parks, and the best shopping, dining and entertainment Getting around is a breeze, with easy access to freeways, buses and trolleys. Laundry is available on premises.
					</Text>
					<Button isBlue={true}>Read More</Button>
				</Content>
				<Features>
					<FeaturesItem>
						<FeaturesTitle>500+</FeaturesTitle>
						<FeaturesSubText>Projects</FeaturesSubText>
						<FeaturesText>
							Over 500 luxury villas for “Home Away From Home” experience
						</FeaturesText>
					</FeaturesItem>
					<FeaturesItem>
						<FeaturesTitle>40+</FeaturesTitle>
						<FeaturesSubText>Locations</FeaturesSubText>
						<FeaturesText>
							Luxury villas and private holiday homes, from all across
						</FeaturesText>
					</FeaturesItem>
					<FeaturesItem>
						<FeaturesTitle>24/7</FeaturesTitle>
						<FeaturesSubText>Help</FeaturesSubText>
						<FeaturesText>
							24/7 help service for all customers to guide and support
						</FeaturesText>
					</FeaturesItem>
				</Features>
			</AboutUsContainer>
			<AboutUsOverlay />
			<AboutUsOverlayTop />
			<AboutUsOverlayLeft />
			<AboutUsOverlayBottom />
			<AboutUsOverlayRight />
		</Wrapper>
	)
}

export default AboutUs;