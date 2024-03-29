import React, { useState } from 'react'
import styled from 'styled-components'
import { AccountContainer } from '../../../utils/styles'
import { Link } from 'react-router-dom'
import { VscBell } from 'react-icons/vsc';
import SearchInput from './SearchInput';
import { UserCredentials } from '../../../utils/types';

interface IProps {
	user: UserCredentials;
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 74px;
	background-color: #161616;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	z-index: 10;
`
const Container = styled(AccountContainer)`
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
const SearchInputField = styled(SearchInput)`
	flex: 0 0 600px;
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
const ActionItem = styled.button`
	color: #fff;
	position: relative;
`
const Avatar = styled(Link)`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`
const AvatarImage = styled.img`
	transform: scale(0.35);
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

const AccountHeader = ({ user }: IProps) => {
	const [searchProject, setSearchProject] = useState<string>('')
	return (
		<Wrapper>
			<Container>
				<LogoWrapper>
					<Logo to='/welcome'>
						<img src="./images/icons/homeLogo.svg" alt="Logo" />
						Homeverse.io
					</Logo>
				</LogoWrapper>
				<SearchInputField
					value={searchProject}
					changeHandler={setSearchProject}
				/>
				<ActionsWrapper>
					<ActionItem type='button'>
						<VscBell style={{ fontSize: 24 }} />
						<BellLabel>9</BellLabel>
					</ActionItem>
					<Avatar to='profile'>
						<AvatarImage src={user.avatar} alt="avatar" />
					</Avatar>
				</ActionsWrapper>
			</Container>
		</Wrapper>
	)
}

export default AccountHeader