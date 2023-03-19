import React, { useState } from 'react'
import styled from 'styled-components';
import { Container } from '../../../utils/styles';
import { CategoryType } from '../../../utils/types';
import Button from '../../UI/Button';
import CategoryButton from '../../CategoryButton';
import { MdArrowForwardIos } from 'react-icons/md';
import Filters from '../../Filter/Filters';
import { useAppSelector } from '../../../app/hooks';
import HouseCard from '../../HouseCard';
import { selectAllHouse } from '../../../features/housesSlice';

const FilteredItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 32px;
`
const CategoryContainer = styled.div`
	display: flex;
	gap: 24px;
`
const ButtonContent = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
const ProductBody = styled.div`
	margin-bottom: 34px;
`
const MoreProducts = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
`
const Arrow = styled(MdArrowForwardIos)`
	transform: rotate(90deg);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
`
const MoreProductsButton = styled.button`
	background-color: rgba(255, 251, 251, 0.65);
	width: 44px;
	height: 44px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`
const ProductsContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 577px);
	gap: 16px;
`

function Product() {
	const [currentCategory, setCurrentCategory] = useState<CategoryType>('all');
	const [showFilters, setShowFilters] = useState<boolean>(false);
	const [cardsCount, setCardsCount] = useState<number>(6);

	const allProducts = useAppSelector(selectAllHouse);
	let showingProducts = allProducts.slice(0, Math.min(allProducts.length, cardsCount))

	if (currentCategory !== 'all') {
		showingProducts = allProducts.filter(item => item.type === currentCategory)
	}

	const clickHandler = (id: CategoryType) => {
		setShowFilters(false);
		setCurrentCategory(id);
	}
	const filterClickHandler = () => {
		setShowFilters(prev => !prev)
	}
	return (
		<section>
			<Container>
				<FilteredItems>
					<CategoryContainer>
						<CategoryButton
							id='all'
							currentCategory={currentCategory}
							clickHandler={clickHandler}
						>
							All
						</CategoryButton>
						<CategoryButton
							id='studio'
							currentCategory={currentCategory}
							clickHandler={clickHandler}
						>
							Studio
						</CategoryButton>
						<CategoryButton
							id='1 rooms'
							currentCategory={currentCategory}
							clickHandler={clickHandler}
						>
							1 Room
						</CategoryButton>
						<CategoryButton
							id='2 rooms'
							currentCategory={currentCategory}
							clickHandler={clickHandler}
						>
							2 Rooms
						</CategoryButton>
					</CategoryContainer>
					<Button isBlue={true} clickHandler={filterClickHandler}>
						<ButtonContent>
							Filters
							<img src="./images/icons/filter.svg" alt="Filter" />
						</ButtonContent>
					</Button>
				</FilteredItems>
				<Filters isActive={showFilters} />
				<ProductBody>
					<ProductsContainer>
						{showingProducts.length !== 0 &&
							showingProducts.map((product) => (
								<HouseCard key={`${product.id}`} product={product} />
							))
						}
					</ProductsContainer>
				</ProductBody>
				{currentCategory === 'all'
					&& cardsCount < allProducts.length &&
					<MoreProducts>
						<MoreProductsButton type='button' onClick={() => setCardsCount(prev => prev + 6)}>
							<Arrow />
						</MoreProductsButton>
						View More
					</MoreProducts>
				}
			</Container>
		</section>
	)
}

export default Product;