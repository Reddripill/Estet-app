import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getId, logOut } from '../../../features/auth/authSlice';
import { useGetUserQuery } from '../../../app/api/userApiSlice';
import Spinner from '../../UI/Spinner';
import Button from '../../UI/Button';
import { useLogoutMutation } from '../../../features/auth/authWithApiSlice';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
	const id = useAppSelector(getId);
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const { data: currentUser, isLoading, isSuccess } = useGetUserQuery(id as string);
	const [logout, { isSuccess: logoutSuccess }] = useLogoutMutation();
	const clickHandler = () => {
		logout();
	}
	let content;
	if (isLoading) {
		content = <Spinner />
	}
	if (isSuccess) {
		content =
			<div>
				{currentUser.firstname}, {currentUser.lastname}
			</div>
	}

	useEffect(() => {
		if (logoutSuccess) {
			dispatch(logOut());
			navigate('/')
		}
	})
	return (
		<>
			<Button isBlue={false} clickHandler={clickHandler}>
				LogOut
			</Button>
		</>
	)
}

export default Profile