import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { getAccessToken } from './authSlice';
import { Outlet, Navigate } from 'react-router-dom';

const RequireAuth = () => {
	const token = useAppSelector(getAccessToken);
	return (
		<>
			{token ?
				<Outlet /> :
				<Navigate
					to='/auth/signup'
					replace={true}
				/>
			}
		</>
	)
}

export default RequireAuth;