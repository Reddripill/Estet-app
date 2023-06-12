import React from 'react'
import MainAccountHeader from './MainAccountHeader'
import { Outlet } from 'react-router-dom'

const MainAccountPage = () => {
	return (
		<>
			<MainAccountHeader />
			<Outlet />
		</>
	)
}

export default MainAccountPage