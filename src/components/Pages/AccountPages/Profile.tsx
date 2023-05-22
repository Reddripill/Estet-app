import React, { useState } from 'react'
import { useAppSelector } from '../../../app/hooks';
import { getId } from '../../../features/auth/authSlice';
import { useGetUserQuery } from '../../../app/api/userApiSlice';
import styled from 'styled-components';
import Spinner from '../../UI/Spinner';
import ProfileContent from './ProfileContent';
import EditUser from './EditUser';


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 137px;
	gap: 40px;
`


const Profile = () => {
	const id = useAppSelector(getId);
	const { data: currentUser, isLoading, isSuccess } = useGetUserQuery(id as string);
	const [isEdit, setIsEdit] = useState<boolean>(false)

	let content;

	if (isLoading) {
		content = <Spinner />
	}

	if (isSuccess) {
		content = <ProfileContent currentUser={currentUser} editClickHandler={() => setIsEdit(true)} />
	}

	return (
		<>
			{isEdit && currentUser &&
				<EditUser currentUser={currentUser} clickHandler={() => setIsEdit(false)} />
			}
			<Wrapper>
				{content}
			</Wrapper>
		</>
	)
}

export default Profile