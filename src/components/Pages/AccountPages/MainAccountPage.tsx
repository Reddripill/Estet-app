import React, { useEffect } from 'react'
import MainAccountHeader from './MainAccountHeader'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`

const MainAccountPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/welcome')
			navigate('/welcome/projects')
	}, [navigate, location])
	return (
		<>
			<MainAccountHeader />
			<Wrapper>
				<Outlet />
			</Wrapper>
		</>
	)
}

export default MainAccountPage