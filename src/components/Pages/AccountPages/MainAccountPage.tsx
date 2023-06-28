import React from 'react'
import MainAccountHeader from './MainAccountHeader'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`

const MainAccountPage = () => {
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