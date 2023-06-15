import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AccountContainer } from '../../../utils/styles'
import SearchInput from './SearchInput'
import ActionButton from '../../UI/ActionButton'

type AccountSectionLink = 'dashboard' | 'projects' | 'requests';

const Wrapper = styled.div`
	padding-top: 132px;
`
const MainAccountContainer = styled(AccountContainer)`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	justify-content: flex-end;
`
const ProjectSearchInput = styled(SearchInput)`
	flex: 0 0 200px;
`


const MainAccountHeader = () => {
	const [activeLink, setActiveLink] = useState<AccountSectionLink>('projects')
	return (
		<Wrapper>
			<MainAccountContainer>
				<SectionTitles>
					<SectionTitle
						to='/welcome'
						className={activeLink === 'dashboard' ? '_active' : ''}
						onClick={() => setActiveLink('dashboard')}
					>
						Dashboard
					</SectionTitle>
					<SectionTitle
						to='/welcome/requests'
						className={activeLink === 'requests' ? '_active' : ''}
						onClick={() => setActiveLink('requests')}
					>
						Requests
					</SectionTitle>
					<SectionTitle
						to='/welcome/projects'
						className={activeLink === 'projects' ? '_active' : ''}
						onClick={() => setActiveLink('projects')}
					>
						Projects
					</SectionTitle>
				</SectionTitles>
				<Actions>
					{activeLink === 'projects' ?
						<>
							<ProjectSearchInput />
							<ProjectSearchInput />
							<Link to='/welcome/newProject'>
								<ActionButton color='gradient'>Create Project</ActionButton>
							</Link>
						</> :
						<>
							<ProjectSearchInput />
							<ProjectSearchInput />
						</>
					}
				</Actions>
			</MainAccountContainer>
		</Wrapper>
	)
}

export default MainAccountHeader