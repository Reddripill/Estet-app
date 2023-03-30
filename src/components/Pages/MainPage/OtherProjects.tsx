import React, { useRef } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import { Title, Text, Arrow } from '../../../utils/styles';
import { Sections } from '../../../utils/types';
import CustomSlider, { SliderItem } from '../../CustomSlider';

interface IProps {
	id: Sections
}

const Wrapper = styled.section`
	
`
const SliderWrapper = styled.div`
	position: relative;
	height: 500px;
`
const SectionInformation = styled.div`
	text-align: center;
	margin-bottom: 32px;
`
const OtherProjectsText = styled(Text)`
	color: rgba(255, 255, 255, 0.5);
`
const ImageItem = styled.div`
	height: 416px;
	width: 100%;
	border: 5px solid #FFFBFB;
	img {
		width: 100%;
		height: 100%;
	}
`


const OtherProjects = ({ id }: IProps) => {
	const prevArrow = useRef<HTMLDivElement>(null);
	const nextArrow = useRef<HTMLDivElement>(null);
	return (
		<Wrapper id={id}>
			<SectionInformation>
				<Title>Other Projects</Title>
				<OtherProjectsText>Other projects by us in different locations</OtherProjectsText>
			</SectionInformation>
			<SliderWrapper>
				<CustomSlider
					prevElement={prevArrow}
					nextElement={nextArrow}
					width={1030}
					infinite={true}
					gap={24}
				>
					<ImageItem>
						<img src='images/home/otherHouses/1.jpg' alt='Other Houses' />
					</ImageItem>
					<ImageItem>
						<img src='images/home/otherHouses/2.jpg' alt='Other Houses' />
					</ImageItem>
					<ImageItem>
						<img src='images/home/otherHouses/3.jpg' alt='Other Houses' />
					</ImageItem>
					<ImageItem>
						<img src='images/home/otherHouses/1.jpg' alt='Other Houses' />
					</ImageItem>
					<ImageItem>
						<img src='images/home/otherHouses/2.jpg' alt='Other Houses' />
					</ImageItem>
					<ImageItem>
						<img src='images/home/otherHouses/3.jpg' alt='Other Houses' />
					</ImageItem>
				</CustomSlider>
				<Arrow className='prev-arrow' ref={prevArrow}>
					<IoIosArrowForward />
				</Arrow>
				<Arrow className='next-arrow' ref={nextArrow}>
					<IoIosArrowForward />
				</Arrow>
			</SliderWrapper>
		</Wrapper>
	)
}

export default OtherProjects