import React, { useEffect } from 'react'
import AboutUs from './AboutUs';
import Connect from './Connect';
import Main from './Main';
import Map from './Map';
import OtherProjects from './OtherProjects';
import Product from './Product';

function Page() {
	useEffect(() => {
		document.title = 'Real Estate'
	}, [])
	return (
		<>
			<Main id='home' />
			<Product />
			<Map />
			<AboutUs id='aboutUs' />
			<OtherProjects id='otherProjects' />
			<Connect />
		</>
	)
}

export default Page;