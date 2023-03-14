import React from 'react'
import AboutUs from './AboutUs';
import Main from './Main';
import Map from './Map';
import OtherProjects from './OtherProjects';
import Product from './Product';

function Page() {
	return (
		<>
			<Main id='home' />
			<Product />
			<Map />
			<AboutUs id='aboutUs' />
			<OtherProjects id='otherProjects' />
		</>
	)
}

export default Page;