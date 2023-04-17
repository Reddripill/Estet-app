import React, { useEffect } from 'react'
import { useRefreshQuery } from '../../features/auth/authWithApiSlice'
import { useAppDispatch } from '../../app/hooks'
import { setCredentials } from '../../features/auth/authSlice';
import { Outlet, useNavigate } from 'react-router-dom';

const PersistAuth = () => {
	const dispatch = useAppDispatch();
	const {
		data: userData,
		isSuccess,
	} = useRefreshQuery();
	const navigate = useNavigate()
	useEffect(() => {
		if (userData) {
			navigate('/welcome');
			dispatch(setCredentials({
				user: {
					firstname: userData.user.firstname,
					lastname: userData.user.lastname,
				},
				token: userData.accessToken,
			}))
		}
	}, [dispatch, userData, navigate])
	return (
		<>
			{isSuccess &&
				<Outlet />
			}
		</>
	)
}

export default PersistAuth