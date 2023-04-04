import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../app/hooks';
import { Container } from '../../../utils/styles';
import ProductCards from '../../../features/houses/HouseCard';

const FilteredHousesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 577px);
	gap: 16px;
	padding-top: 150px;
	padding-bottom: 50px;
`

function FilteredElements() {
	const filteredHouses = useAppSelector(state => state.houses.filteredHouses);
	return (
		<Container>
			<FilteredHousesWrapper>
				{filteredHouses &&
					filteredHouses.map(house => (
						<ProductCards key={house.id} product={house} />
					))
				}
			</FilteredHousesWrapper>
		</Container>
	)
}

export default FilteredElements