import React from 'react'
import styled from 'styled-components';
import AccountHeader from './AccountHeader';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`

const RootAccountPage = () => {
	return (
		<Wrapper>
			<AccountHeader />
			<Outlet />
		</Wrapper>
	)
}

export default RootAccountPage;