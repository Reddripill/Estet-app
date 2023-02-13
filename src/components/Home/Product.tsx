import React, { useState } from 'react'
import styled from 'styled-components';
import { Container } from '../../utils/styles';
import { CategoryType } from '../../utils/types';
import Button from '../Button';
import CategoryButton from '../CategoryButton';
import ProductItems from './ProductItems';

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
	
`

function Product() {
	const [currentCategory, setCurrentCategory] = useState<CategoryType>('all');
	return (
		<section>
			<Container>
				<FilteredItems>
					<CategoryContainer>
						<CategoryButton id='all' isActive={true}>All</CategoryButton>
						<CategoryButton id='studio'>Studio</CategoryButton>
						<CategoryButton id='1 bedroom'>1 Bed Room</CategoryButton>
						<CategoryButton id='2 bedroom'>2 Bed Room</CategoryButton>
					</CategoryContainer>
					<Button isBlue={true}>
						<ButtonContent>
							Filters
							<img src="./images/icons/filter.svg" alt="Filter" />
						</ButtonContent>
					</Button>
				</FilteredItems>
				<ProductBody>
					<ProductItems filterParam={currentCategory} />
				</ProductBody>
			</Container>
		</section>
	)
}

export default Product;