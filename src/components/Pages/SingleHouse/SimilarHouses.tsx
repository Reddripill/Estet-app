import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectAllHouse } from '../../../features/Houses/housesSlice'
import MiniHouseCard from '../../../features/Houses/MiniHouseCard'
import { SmallTitle } from '../../../utils/styles'


const SimilarHousesContainer = styled.div`
	margin-bottom: 240px;
	margin-left: calc((100vw - 1170px) / 2);
	overflow: hidden;
`
const HouseList = styled.ul`
	display: flex;
	gap: 30px;
`
const SimilarHousesTitle = styled(SmallTitle)`
	margin-bottom: 36px;
`

const SimilarHouses = () => {
	const houses = useSelector(selectAllHouse).slice(0, 4);
	return (
		<>
			{houses.length > 0 &&
				<SimilarHousesContainer>
					<SimilarHousesTitle>Similar listings</SimilarHousesTitle>
					<HouseList>
						{houses.map(house => (
							<li id={house.id}>
								<MiniHouseCard house={house} />
							</li>
						))}
					</HouseList>
				</SimilarHousesContainer>
			}
		</>
	)
}

export default SimilarHouses