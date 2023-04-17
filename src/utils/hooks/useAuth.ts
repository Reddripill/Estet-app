import React, { useEffect } from 'react'
import { useRefreshQuery } from '../../features/auth/authWithApiSlice'
import { useAppDispatch } from '../../app/hooks'
import { setCredentials } from '../../features/auth/authSlice';

const useAuth = () => {
	const dispatch = useAppDispatch();
	const {
		data: userData,
		isSuccess,
	} = useRefreshQuery();
	useEffect(() => {
		if (isSuccess) {
			dispatch(setCredentials({
				user: {
					firstname: userData.user.firstname,
					lastname: userData.user.lastname,
				},
				token: userData.accessToken,
			}))
		}
	})
}

export default useAuth