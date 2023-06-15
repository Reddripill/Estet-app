import React, { useState } from 'react'
import { useAppSelector } from '../../../app/hooks';
import { getId } from '../../../features/auth/authSlice';
import { useGetUserQuery } from '../../../app/api/userApiSlice';
import styled from 'styled-components';
import Spinner from '../../UI/Spinner';
import ProfileContent from './ProfileContent';
import EditUser from './EditUser';
import DeletePopup from './DeletePopup';


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding-top: 132px;
	gap: 40px;
`


const Profile = () => {
	const id = useAppSelector(getId);
	const { data: currentUser, isLoading, isSuccess } = useGetUserQuery(id as string);
	const [isEditPopup, setIsEditPopup] = useState<boolean>(false);
	const [isConfirmPopup, setIsConfirmPopup] = useState<boolean>(false);

	let content;

	if (isLoading) {
		content = <Spinner />
	}

	if (isSuccess) {
		content = <ProfileContent
			currentUser={currentUser}
			editClickHandler={() => setIsEditPopup(true)}
			deleteClickHandler={() => setIsConfirmPopup(true)}
		/>
	}

	return (
		<>
			{isEditPopup && currentUser && !isConfirmPopup &&
				<EditUser
					currentUser={currentUser}
					clickHandler={() => setIsEditPopup(false)}
					setConfirm={() => setIsConfirmPopup(true)}
				/>
			}
			{isConfirmPopup &&
				<DeletePopup setState={setIsConfirmPopup} />
			}
			{!isEditPopup && !isConfirmPopup &&
				<Wrapper>
					{content}
				</Wrapper>
			}
		</>
	)
}

export default Profile