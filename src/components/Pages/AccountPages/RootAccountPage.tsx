import React from 'react'
import styled from 'styled-components';
import AccountHeader from './AccountHeader';
import { useAppSelector } from '../../../app/hooks';
import { getAuthUser } from '../../../features/auth/authSlice';

const Wrapper = styled.div`
`

const RootAccountPage = () => {
	const user = useAppSelector(getAuthUser);
	return (
		<Wrapper>
			<AccountHeader />
			<div>
				Hi, {user?.firstname + ' ' + user?.lastname}
			</div>
		</Wrapper>
	)
}

export default RootAccountPage;