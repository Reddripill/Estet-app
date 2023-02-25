import React from 'react';
import styled from 'styled-components';
import { Container } from '../../utils/styles';
import Select from '../Select';
import { FaHouseUser } from 'react-icons/fa';
import { CgDollar } from 'react-icons/cg';
import { BiEuro } from 'react-icons/bi';
import FilterInput from './FilterInput';
import PriceRangeFilter from './PriceRangeFilter';

const FilterWrapper = styled.div`
	margin-bottom: 32px;
`

const FilterContainer = styled(Container)`
	background-color: #161616;
	border-radius: 10.269px;
`

const FilterBody = styled.div`
	padding: 20px 15px;
	display: flex;
	justify-content: space-between;
`

const FilterContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 120px 1fr 120px;
	gap: 24px 14px;
`

const PriceCurrency = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`

const SearchBlcok = styled.div`
`

function Filters() {
	return (
		<FilterWrapper>
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
						<PriceRangeFilter min={1000} max={20000} />
					</FilterContent>
					<SearchBlcok>
					</SearchBlcok>
				</FilterBody>
			</FilterContainer>
		</FilterWrapper>
	)
}

export default Filters;