import React from 'react'
import styled from 'styled-components';
import AccountHeader from './AccountHeader';
import { Outlet } from 'react-router-dom';
import { getId } from '../../../features/auth/authSlice';
import { useAppSelector } from '../../../app/hooks';
import { useGetUserQuery } from '../../../app/api/userApiSlice';
import Spinner from '../../UI/Spinner';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`

const RootAccountPage = () => {
	const id = useAppSelector(getId);
	const { data: currentUser, isLoading, isSuccess } = useGetUserQuery(id as string);

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			{isSuccess && currentUser &&
				<Wrapper>
					<AccountHeader user={currentUser} />
					<Outlet />
				</Wrapper>
			}
		</>
	)
}

export default RootAccountPage;