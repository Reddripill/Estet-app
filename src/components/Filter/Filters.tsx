import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../utils/styles';
import Select from '../Select';
import { FaHouseUser } from 'react-icons/fa';
import { CgDollar } from 'react-icons/cg';
import { BiEuro } from 'react-icons/bi';
import FilterInput from './FilterInput';
import PriceRangeFilter from './PriceRangeFilter';
import { Link } from 'react-router-dom';
import useFiltering from '../../utils/hooks/useFiltering';
import { useAppDispatch } from '../../app/hooks';
import { addFilteredHouses } from '../../features/housesSlice';

interface Props {
	isActive: boolean;
}

const FilterWrapper = styled.div`
	max-height: 0px;
	overflow: hidden;
	transition: max-height .4s linear 0s;
	&._active {
		max-height: 250px;
		transition: max-height .4s linear 0s;
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

const SearchResultsButton = styled(Link)`
	height: 42px;
	width: 120px;
	background-color: #0957CB;
	border-radius: 8px;
	color: #fff;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	&._disabled {
		pointer-events: none;
		opacity: 0.5;
	}
`

function Filters({ isActive }: Props) {
	const [service, setService] = useState<string>('Rent');
	const [location, setLocation] = useState<string | null>(null);
	const [productType, setProductType] = useState<string>('House');
	const [priceCurrency, setPriceCurrency] = useState<string>('USD');
	const [priceRange, setPriceRange] = useState<number[]>([1000, 400000]);
	const [type, setType] = useState<string>('1 Rooms');

	const dispatch = useAppDispatch();

	const filter = useFiltering({ service, location, productType, priceRange, type })
	return (
		<FilterWrapper className={isActive ? '_active' : ''}>
			<FilterContainer>
				<FilterBody>
					<FilterContent>
						<Select
							options={['Rent', 'Buy']}
							icon={<FaHouseUser style={{ fontSize: 18 }} />}
							state={service}
							stateChanger={setService}
						/>
						<FilterInput
							placeholder='Your desiered location goes here'
							locationChanger={setLocation}
						/>
						<Select
							options={['House', 'Villa']}
							icon={<FaHouseUser style={{ fontSize: 18 }} />}
							state={productType}
							stateChanger={setProductType}
						/>
						<PriceCurrency>
							<Select
								options={['USD', 'Euro']}
								icon={[<CgDollar style={{ fontSize: 18 }} />, <BiEuro style={{ fontSize: 18 }} />]}
								state={priceCurrency}
								stateChanger={setPriceCurrency}
							/>
						</PriceCurrency>
						<PriceRangeFilter
							min={1000}
							max={400000}
							gap={50000}
							step={1000}
							rangeChanger={setPriceRange}
						/>
						<Select
							options={['1 Rooms', '2 Rooms', 'Studio']}
							icon={<FaHouseUser style={{ fontSize: 18 }} />}
							state={type}
							stateChanger={setType}
						/>
					</FilterContent>
					<SearchBlock>
						<SearchResults>
							<SearchResultsNumber>{filter.housesCount}</SearchResultsNumber>
							<SearchResultsText>Results</SearchResultsText>
						</SearchResults>
						<SearchResultsButton
							to={`/filteredHouses`}
							className={filter.housesCount ? '' : '_disabled'}
							onClick={() => {
								if (filter.filteredHouses) {
									dispatch(addFilteredHouses(filter.filteredHouses))
								}
							}}
						>
							Search
						</SearchResultsButton>
					</SearchBlock>
				</FilterBody>
			</FilterContainer>
		</FilterWrapper >
	)
}

export default Filters;