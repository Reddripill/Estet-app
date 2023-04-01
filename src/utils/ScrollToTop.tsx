import React, { FC, PropsWithChildren, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop: FC<PropsWithChildren> = ({ children }) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		})
	}, [location])
	return (
		<>{children}</>
	)
}

export default ScrollToTop