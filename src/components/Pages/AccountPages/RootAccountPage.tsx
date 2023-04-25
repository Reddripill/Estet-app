import React from 'react'
import styled from 'styled-components';
import AccountHeader from './AccountHeader';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
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