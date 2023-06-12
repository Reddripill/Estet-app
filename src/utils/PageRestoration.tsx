import React, { FC } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const PageRestoration: FC = () => {
	return (
		<>
			<Outlet />
			<ScrollRestoration
				getKey={(location, matches) => {
					console.log('Location: ', location);
					console.log('Matches: ', matches);
					return location.key;
				}}
			/>
		</>
	)
}

export default PageRestoration