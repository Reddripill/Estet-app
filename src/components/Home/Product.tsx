import React from 'react'
import styled from 'styled-components';
import { Container } from '../../utils/styles';
import Button from '../Button';
import CategoryButton from '../CategoryButton';

const FilteredItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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

function Product() {
	return (
		<section>
			<Container>
				<FilteredItems>
					<CategoryContainer>
						<CategoryButton isActive={true}>All</CategoryButton>
						<CategoryButton>Studio</CategoryButton>
						<CategoryButton>1 Bed Room</CategoryButton>
						<CategoryButton>2 Bed Room</CategoryButton>
					</CategoryContainer>
					<Button>
						<ButtonContent>
							Filters
							<img src="./images/icons/filter.svg" alt="Filter" />
						</ButtonContent>
					</Button>
				</FilteredItems>
			</Container>
		</section>
	)
}

export default Product;