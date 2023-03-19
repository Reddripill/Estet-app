import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';


const AppWrapper = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
`
const Wrapper = styled.div`
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	gap: 64px;
`

function Layout() {
	return (
		<AppWrapper>
			<Header />
			<Wrapper>
				<Outlet />
			</Wrapper>
			<Footer />
		</AppWrapper>
	)
}

export default Layout;