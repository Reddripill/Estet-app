import React, { useEffect } from 'react'
import styled from 'styled-components'
import ActionButton from '../../UI/ActionButton';
import { UserCredentials } from '../../../utils/types';
import { useLogoutMutation } from '../../../features/auth/authWithApiSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { logOut } from '../../../features/auth/authSlice';
import AccountHeader from './AccountHeader';


interface IProps {
	currentUser: UserCredentials;
	editClickHandler: () => void;
	deleteClickHandler: () => void;
}


const Container = styled(AccountHeader)`
	position: relative;
`
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
	flex: 1 0 auto;
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
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`
const UserAvatarImage = styled.img`
	width: 100%;
	height: 100%;
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
const Footer = styled.footer`
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


const ProfileContent = ({ currentUser, editClickHandler, deleteClickHandler }: IProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch()
	const [userLogout, { isSuccess: logoutSuccess }] = useLogoutMutation();
	const clickHandler = () => {
		userLogout();
	}

	useEffect(() => {
		if (logoutSuccess) {
			dispatch(logOut());
			navigate('/')
		}
	}, [logoutSuccess, navigate, dispatch])
	return (
		<>
			<UserBlock>
				<Title>Here is your profile, {currentUser.firstname}</Title>
				<UserInformation>
					<UserAvatar>
						<UserAvatarImage src={currentUser.avatar} alt='user avatar' />
					</UserAvatar>
					<UserNickname>
						<UserFullName>{currentUser.firstname + ' ' + currentUser.lastname}</UserFullName>
						<UserId>{'@' + currentUser.firstname.toLowerCase() + currentUser.lastname.toLowerCase()}</UserId>
					</UserNickname>
				</UserInformation>
				<Actions>
					<ActionButton color='blue' clickHandler={editClickHandler}>
						Edit
					</ActionButton>
					<ActionButton color='red' clickHandler={clickHandler}>
						LogOut
					</ActionButton>
				</Actions>
			</UserBlock>
			<Footer>
				<FooterText>
					You can also <span onClick={deleteClickHandler}>delete</span> your account
				</FooterText>
			</Footer>
		</>
	)
}

export default ProfileContent