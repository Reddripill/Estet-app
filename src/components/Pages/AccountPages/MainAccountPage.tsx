import React, { useEffect, useState } from 'react'
import MainAccountHeader from './MainAccountHeader'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export type ProjectsFiltersType = {
	searchFilter: string;
	dropdownFilter: DropdownFilterType[];
}

export type DropdownFilterType = {
	property: string;
	value: string;
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`

const MainAccountPage = () => {
	const [projectsFilters, setProjectsFilters] = useState<ProjectsFiltersType>({
		searchFilter: '',
		dropdownFilter: []
	});
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/welcome')
			navigate('/welcome/projects')
	}, [navigate, location])
	return (
		<>
			<MainAccountHeader setFilters={setProjectsFilters} />
			<Wrapper>
				<Outlet context={projectsFilters} />
			</Wrapper>
		</>
	)
}

export default MainAccountPage