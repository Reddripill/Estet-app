import React, { useEffect } from 'react'
import { useRefreshQuery } from '../../features/auth/authWithApiSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getAccessToken, setCredentials } from '../../features/auth/authSlice';
import { Outlet, useNavigate } from 'react-router-dom';

const PersistAuth = () => {
	const dispatch = useAppDispatch();
	const token = useAppSelector(getAccessToken);
	const {
		data: userData,
		isSuccess,
	} = useRefreshQuery();
	const navigate = useNavigate();
	useEffect(() => {
		if (userData) {
			navigate('/welcome');
			dispatch(setCredentials({
				user: {
					firstname: userData.user.firstname,
					lastname: userData.user.lastname
				},
				accessToken: userData.accessToken,
				id: userData.id,
			}))
		}
	}, [dispatch, userData, navigate, token])
	return (
		<>
			{isSuccess &&
				<Outlet />
			}
		</>
	)
}

export default PersistAuth