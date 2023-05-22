import React, { useEffect } from 'react'
import styled from 'styled-components'
import ActionButton from '../../UI/ActionButton';
import { UserCredentials } from '../../../utils/types';
import { useLogoutMutation } from '../../../features/auth/authWithApiSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { logOut } from '../../../features/auth/authSlice';


interface IProps {
	currentUser: UserCredentials;
	editClickHandler: () => void;
}


const Title = styled.div`
	font-family: 'Mulish';
	font-weight: 700;
	font-size: 36px;
	line-height: 40px;
	color: #FFFFFF;
`
const UserBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	flex: 0 0 100%;
`
const UserInformation = styled.div`
	display: flex;
	align-items: center;
	gap: 40px;
`
const UserAvatar = styled.div`
	width: 120px;
	height: 120px;
	border-radius: 50%;
	background-color: #ffffff85;
`
const UserNickname = styled.div``
const UserFullName = styled.div`
	font-family: 'Mulish';
	font-weight: 700;
	font-size: 24px;
	line-height: 24px;
	color: #FFFFFF;
	margin-bottom: 16px;
`
const UserId = styled.div`
	font-family: 'Mulish';
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #5F5F5F;
`
const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
`
const Footer = styled.div`
	margin-bottom: 12px;
	display: flex;
`
const FooterText = styled.div`
	font-family: 'Mulish';
	font-weight: 800;
	font-size: 9px;
	line-height: 20px;
	letter-spacing: 0.21em;
	text-transform: uppercase;
	color: #5F5F5F;
	span {
		color: #DD5E5E;
		cursor: pointer;
	}
`


const ProfileContent = ({ currentUser, editClickHandler }: IProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const [logout, { isSuccess: logoutSuccess }] = useLogoutMutation();
	const clickHandler = () => {
		logout();
	}

	useEffect(() => {
		if (logoutSuccess) {
			dispatch(logOut());
			navigate('/')
		}
	})
	return (
		<>
			<Title>Here is your profile, {currentUser.firstname}</Title>
			<UserBlock>
				<UserInformation>
					<UserAvatar />
					<UserNickname>
						<UserFullName>{currentUser.firstname + ' ' + currentUser.lastname}</UserFullName>
						<UserId>{'@' + currentUser.firstname.toLowerCase() + currentUser.lastname.toLowerCase()}</UserId>
					</UserNickname>
				</UserInformation>
				<Actions>
					<ActionButton isBlue={true} clickHandler={editClickHandler}>
						Edit
					</ActionButton>
					<ActionButton isBlue={false} clickHandler={clickHandler}>
						LogOut
					</ActionButton>
				</Actions>
			</UserBlock>
			<Footer>
				<FooterText>
					You can also <span>delete</span> your account
				</FooterText>
			</Footer>
		</>
	)
}

export default ProfileContent