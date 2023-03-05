import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { CategoryType, HouseCard } from '../../utils/types';
import ProductCards from '../ProductCard';

interface ProductItemsProps {
	filterParam: CategoryType;
}

const ProductsContainer = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 577px);
	gap: 16px;
`


const ProductItems: FC<ProductItemsProps> = ({ filterParam }) => {
	let allProducts = useAppSelector(state => state.houses.entities);
	if (filterParam !== 'all') {
		allProducts = allProducts.filter(item => item.type === filterParam)
	}
	return (
		<ProductsContainer>
			{allProducts.length !== 0 &&
				allProducts.map((product: HouseCard) => (
					<ProductCards key={`${product.id}`} product={product} />
				))
			}
		</ProductsContainer>
	)
}

export default ProductItems;