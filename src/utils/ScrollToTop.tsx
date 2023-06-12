import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const ScrollToTop = () => {
	const location = useLocation();
	useEffect(() => {
		if (!location.hash) {
			window.scrollTo({
				top: 0,
				left: 0,
			})
		} else {
			const section = document.getElementById(location.hash.slice(1));
			if (section) {
				const sectionTop = section.offsetTop > 82 ? section.offsetTop - 82 : section.offsetTop;
				window.scrollTo({
					top: sectionTop,
					behavior: 'smooth',
					left: 0
				})
			}
		}
	}, [location])
	return (
		<Outlet />
	)
}

export default ScrollToTop