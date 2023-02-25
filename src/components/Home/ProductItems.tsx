import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { CategoryType, HouseCard } from '../../utils/types';
import Button from '../Button';
import { IoIosArrowForward } from 'react-icons/io';
import useIntersection from '../../utils/hooks/useIntersection';

interface ProductProps {
	product: HouseCard;
}

interface ProductItemsProps {
	filterParam: CategoryType;
}

const ProductsContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 577px);
	gap: 16px;
`

const Card = styled.div`
	width: 577px;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	overflow: hidden;
	background-color: #161616;
`
const CardSkeleton = styled(Card)`
	height: 582px;
`

const Image = styled.div`
	height: 450px;
	position: relative;
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
`
const Arrow = styled.div`
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

function Product({ product }: ProductProps) {
	const productTarget = useRef<HTMLDivElement>(null);
	const isVisible = useIntersection(productTarget, true);
	return (
		<Card>
			<Image ref={productTarget}>
				{isVisible &&
					<img src={product.url} alt="House" />
				}
				<Arrow className='prev-arrow'>
					<IoIosArrowForward />
				</Arrow>
				<Arrow className='next-arrow'>
					<IoIosArrowForward />
				</Arrow>
			</Image>
			<Information>
				<Details>
					<Price>{product.price} $</Price>
					<Button isBlue={false}>View Details</Button>
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
}


const ProductItems: FC<ProductItemsProps> = ({ filterParam }) => {
	let allProducts = useAppSelector(state => state.houses.entities);
	if (filterParam !== 'all') {
		allProducts = allProducts.filter(item => item.type === filterParam)
	}
	return (
		<ProductsContainer>
			{allProducts.length !== 0 &&
				allProducts.map(product => (
					<Product key={`${product.id}`} product={product} />
				))
			}
		</ProductsContainer>
	)
}

export default ProductItems;