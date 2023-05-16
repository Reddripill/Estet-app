import React, { useRef } from 'react';
import styled from "styled-components";
import { HouseCard } from "../../utils/types";
import Button from '../../components/UI/Button';
import { IoIosArrowForward } from 'react-icons/io';
import useIntersection from '../../utils/hooks/useIntersection';
import CustomSlider from '../../components/CustomSlider';
import { priceConvertion } from '../../utils/functions/priceConvertion';
import { Link } from 'react-router-dom';

interface ProductProps {
	product: HouseCard;
}

interface ContentProps {
	image: string[];
}

const Card = styled.div`
	width: 577px;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	overflow: hidden;
	background-color: #161616;
`
const CardTop = styled.div`
	height: 450px;
	position: relative;
`
const Arrow = styled.button`
	position: absolute;
	top: 0;
	height: 100%;
	width: 60px;
	background: rgba(0, 0, 0, 0.3);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFBFB;
	font-size: 24px;
	z-index: 5;
	&.prev-arrow {
		left: 0;
		svg {
			transform: rotate(180deg);
		}
	}
	&.next-arrow {
		right: 0;
	}
`
const Information = styled.div`
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`
const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Price = styled.div`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 24px;
	line-height: 139.52%;
	color: #FFFBFB;
`
const Feature = styled.div`
	display: flex;
	align-items: center;
	height: 42px;
	border: 1px solid rgba(255, 251, 251, 0.35);
	border-radius: 8px;
`
const FeatureItem = styled.div`
	flex: 0 0 33.333%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
	&:not(:last-child) {
		border-right: 1px solid rgba(255, 251, 251, 0.35);
	}
`
const ContentImage = styled.div`
	height: 100%;
	img {
		height: 100%;
	}
`


export default React.memo(function HouseCard({ product }: ProductProps) {
	const productTarget = useRef<HTMLDivElement>(null);
	const prevArrow = useRef<HTMLButtonElement>(null);
	const nextArrow = useRef<HTMLButtonElement>(null);
	const isVisible = useIntersection(productTarget, true);
	return (
		<Card>
			<CardTop ref={productTarget}>
				{isVisible &&
					<CustomSlider
						prevElement={prevArrow}
						nextElement={nextArrow}
						width={577}
						infinite={false}
					>
						{product.url.map(item => (
							<ContentImage key={item}>
								<img src={item} alt="House" />
							</ContentImage>
						))}
					</CustomSlider>
				}
				<Arrow className='prev-arrow' ref={prevArrow}>
					<IoIosArrowForward />
				</Arrow>
				<Arrow className='next-arrow' ref={nextArrow}>
					<IoIosArrowForward />
				</Arrow>
			</CardTop>
			<Information>
				<Details>
					<Price>{priceConvertion(product.price)} $</Price>
					<Link to={`/${product.id}`}>
						<Button isBlue={false}>View Details</Button>
					</Link>
				</Details>
				<Feature>
					<FeatureItem>
						<img src="./images/icons/bed.svg" alt="Bed" />
						{product.type}
					</FeatureItem>
					<FeatureItem>
						<img src="./images/icons/shower.svg" alt="Shower" />
						{`${product.bath} Bath`}
					</FeatureItem>
					<FeatureItem>
						{`${product.square} sq ft`}
					</FeatureItem>
				</Feature>
			</Information>
		</Card>
	)
})