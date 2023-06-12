import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AccountContainer } from '../../../utils/styles'
import SearchInput from './SearchInput'
import ActionButton from '../../UI/ActionButton'

const Wrapper = styled.div`
	padding-top: 132px;
`
const MainAccountContainer = styled(AccountContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`
const SectionTitles = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
`
const SectionTitle = styled(Link)`
	font-family: 'Mulish';
	font-weight: 700;
	font-size: 30px;
	line-height: 32px;
	color: #5F5F5F !important;
	&._active {
		color: #FFFFFF !important;
	}
`
const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`
const ActionFilters = styled(Actions)`
	flex: 1 1 200px;
`


const MainAccountHeader = () => {
	return (
		<Wrapper>
			<MainAccountContainer>
				<SectionTitles>
					<SectionTitle to='/'>Dashboard</SectionTitle>
					<SectionTitle to='/'>Requests</SectionTitle>
					<SectionTitle to='/' className='_active'>Projects</SectionTitle>
				</SectionTitles>
				<Actions>
					<ActionFilters>
						<SearchInput />
						<SearchInput />
						<ActionButton color='gradient'>Create Project</ActionButton>
					</ActionFilters>
				</Actions>
			</MainAccountContainer>
		</Wrapper>
	)
}

export default MainAccountHeader