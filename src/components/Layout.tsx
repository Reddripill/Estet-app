import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 64px;
`

function Layout() {
	return (
		<>
			<Header />
			<Wrapper>
				<Outlet />
			</Wrapper>
		</>
	)
}

export default Layout;