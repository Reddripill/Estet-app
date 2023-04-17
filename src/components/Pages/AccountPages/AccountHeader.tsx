import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../utils/styles'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput';
import { VscBell } from 'react-icons/vsc';


const Wrapper = styled.div`
	height: 74px;
	background-color: #161616;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`
const AccountContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`
const LogoWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex: 0 0 150px;
`
const ActionsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 24px;
	flex: 0 0 150px;
`
const Logo = styled(Link)`
	display: inline-flex;
	align-items: center;
	flex-direction: column;
	font-family: 'Wellfleet';
	img {
		max-width: 30px;
	}
`
const SearchInputField = styled(SearchInput)`
	flex: 1 1 auto;
`
const ActionItem = styled.button`
	color: #fff;
	position: relative;
`
const FakePhoto = styled(Link)`
	display: inline-block;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: #fff;
`
const BellLabel = styled.div`
	position: absolute;
	top: -4px;
	right: -4px;
	z-index: 2;
	min-width: 16px;
	height: 16px;
	background-color: #DD5E5E;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Mulish';
	font-weight: 800;
	font-size: 12px;
	line-height: 8px;
	text-transform: uppercase;
	color: #FFFFFF;
	border-radius: 50%;
`

const AccountHeader = () => {
	return (
		<Wrapper>
			<AccountContainer>
				<LogoWrapper>
					<Logo to='/welcome'>
						<img src="./images/icons/homeLogo.svg" alt="Logo" />
						Homeverse.io
					</Logo>
				</LogoWrapper>
				<SearchInputField />
				<ActionsWrapper>
					<ActionItem type='button'>
						<VscBell style={{ fontSize: 24 }} />
						<BellLabel>9</BellLabel>
					</ActionItem>
					<ActionItem type='button'>
						<FakePhoto to='/welcome/profile' />
					</ActionItem>
				</ActionsWrapper>
			</AccountContainer>
		</Wrapper>
	)
}

export default AccountHeader