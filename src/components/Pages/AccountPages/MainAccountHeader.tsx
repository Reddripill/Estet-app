import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AccountContainer } from '../../../utils/styles'
import SearchInput from './SearchInput'
import ActionButton from '../../UI/ActionButton'
import DropDown from '../../UI/DropDown'
import { ProjectsFiltersType } from './MainAccountPage'
import { ProductType } from '../../../utils/types'


interface IProps {
	setFilters: React.Dispatch<React.SetStateAction<ProjectsFiltersType>>;
}

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
const DropDownItem = styled.div`
	flex: 0 0 200px;
`
const ButtonLink = styled(Link)`
	display: inline-block;
	flex: 0 0 auto;
`


const MainAccountHeader = ({ setFilters }: IProps) => {
	const [activeLink, setActiveLink] = useState<AccountSectionLink>('projects')
	const [projectDropDown, setProjectDropDown] = useState<string>('All Projects')
	const [searchProject, setSearchProject] = useState('');
	const addFilterToSearch = (val: string) => {
		setFilters(prev => ({
			...prev,
			searchFilter: val,
		}))
	}
	const addFilterToDropdown = (val: string, property: keyof ProductType) => {
		if (val.split(' ')[0].toLowerCase() !== 'all') {
			setFilters(prev => {
				const existedDropdownFilter = prev.dropdownFilter.find(item => item.property === property);
				if (existedDropdownFilter) {
					return {
						...prev,
						dropdownFilter: prev.dropdownFilter.map(item => {
							if (item.property === property) {
								return {
									...item,
									value: val,
								}
							} else {
								return item;
							}
						})
					}
				} else {
					return {
						...prev,
						dropdownFilter: prev.dropdownFilter.concat({
							property,
							value: val,
						})
					}
				}
			})
		} else {
			setFilters(prev => ({
				...prev,
				dropdownFilter: prev.dropdownFilter.concat({
					property,
					value: 'all'
				})
			}))
		}
	}
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
				{activeLink === 'projects' ?
					<Actions key='projects'>
						<ProjectSearchInput
							value={searchProject}
							changeHandler={(val) => {
								setSearchProject(val)
								addFilterToSearch(val)
							}}
						/>
						<DropDownItem>
							<DropDown
								options={['All Projects', 'Villa', 'Apartment', 'House']}
								currentOption={projectDropDown}
								setCurrentOption={(val) => {
									setProjectDropDown(val);
									addFilterToDropdown(val, 'projectType')
								}}
							/>
						</DropDownItem>
						<ButtonLink to='/welcome/newProject'>
							<ActionButton color='gradient'>Create Project</ActionButton>
						</ButtonLink>
					</Actions> :
					<Actions key='requests'>
						{/* <ProjectSearchInput />
							<ProjectSearchInput /> */}
					</Actions>
				}
			</MainAccountContainer>
		</Wrapper>
	)
}

export default MainAccountHeader