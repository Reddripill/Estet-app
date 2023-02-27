import React from 'react';
import styled from 'styled-components';
import { Container } from '../../utils/styles';
import Select from '../Select';
import { FaHouseUser } from 'react-icons/fa';
import { CgDollar } from 'react-icons/cg';
import { BiEuro } from 'react-icons/bi';
import FilterInput from './FilterInput';
import PriceRangeFilter from './PriceRangeFilter';

interface Props {
	isActive: boolean;
}

const FilterWrapper = styled.div`
	max-height: 0px;
	overflow: hidden;
	transition: max-height .3s ease-in-out 0s;
	&._active {
		max-height: 1000px;
		transition: max-height .3s ease-in-out 0s;
	}
`

const FilterContainer = styled(Container)`
	margin-bottom: 32px;
	background-color: #161616;
	border-radius: 10.269px;
`

const FilterBody = styled.div`
	padding: 30px 15px;
	display: flex;
	justify-content: space-between;
	gap: 100px;
`

const FilterContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 150px 1fr 150px;
	gap: 24px 14px;
`

const PriceCurrency = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`

const SearchBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -50px;
		height: 100%;
		width: 2px;
		background-color: #2e2e2e;
	}
`

const SearchResults = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3px;
`

const SearchResultsNumber = styled.div`
`

const SearchResultsText = styled.div`
	color: rgba(255, 255, 255, 0.751);
`

const SearchResultsButton = styled.button`
	height: 42px;
	width: 120px;
	background-color: #0957CB;
	border-radius: 8px;
	color: #fff;
`

function Filters({ isActive }: Props) {
	return (
		<FilterWrapper className={isActive ? '_active' : ''}>
			<FilterContainer>
				<FilterBody>
					<FilterContent>
						<Select options={['Rent', 'Buy']} icon={<FaHouseUser style={{ fontSize: 18 }} />} />
						<FilterInput placeholder='Your desiered location goes here' />
						<Select options={['House', 'Villa']} icon={<FaHouseUser style={{ fontSize: 18 }} />} />
						<PriceCurrency>
							<Select
								options={['USD', 'Euro']}
								icon={[<CgDollar style={{ fontSize: 18 }} />, <BiEuro style={{ fontSize: 18 }} />]}
							/>
						</PriceCurrency>
						<PriceRangeFilter min={1000} max={20000} gap={1000} />
						<Select options={['1 Rooms', '2 Rooms', 'Studio']} icon={<FaHouseUser style={{ fontSize: 18 }} />} />
					</FilterContent>
					<SearchBlock>
						<SearchResults>
							<SearchResultsNumber>500</SearchResultsNumber>
							<SearchResultsText>Results</SearchResultsText>
						</SearchResults>
						<SearchResultsButton>Search</SearchResultsButton>
					</SearchBlock>
				</FilterBody>
			</FilterContainer>
		</FilterWrapper>
	)
}

export default Filters;