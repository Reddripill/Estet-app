import React from 'react'
import { priceConvertion } from '../../utils/functions/priceConvertion';
import Footer from '../Footer';
import AboutUs from './AboutUs';
import Connect from './Connect';
import Main from './Main';
import Map from './Map';
import OtherProjects from './OtherProjects';
import Product from './Product';

function Page() {
	console.log('Result:', priceConvertion('123456'));
	return (
		<>
			<Main id='home' />
			<Product />
			<Map />
			<AboutUs id='aboutUs' />
			<OtherProjects id='otherProjects' />
			<Connect />
			<Footer />
		</>
	)
}

export default Page;