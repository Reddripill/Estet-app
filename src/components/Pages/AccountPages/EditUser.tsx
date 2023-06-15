import React, { useEffect } from 'react'
import { UserCredentials } from '../../../utils/types';
import styled from 'styled-components';
import Input from '../../UI/Input';
import { useInput } from '../../../utils/hooks/useInput';
import ActionButton from '../../UI/ActionButton';
import { useChangeUserMutation } from '../../../app/api/userApiSlice';
import { useNavigate } from 'react-router-dom';
import Popup from '../../UI/Popup';

interface IProps {
	clickHandler: () => void;
	currentUser: UserCredentials;
	setConfirm: () => void;
}


const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Title = styled.div`
	font-family: 'Mulish';
	font-weight: 700;
	font-size: 36px;
	line-height: 40px;
	color: #FFFFFF;
`
const Cross = styled.div`
	height: 24px;
	width: 24px;
	cursor: pointer;
	position: relative;
	&::before,
	&::after {
		content:'';
		position: absolute;
		top: 50%;
		left: 50%;
		height: 1px;
		width: 24px;
		background-color: #fff;
	}
	&::before {
		transform: translate(-50%) rotate(-45deg)
	}
	&::after {
		transform: translate(-50%) rotate(45deg)
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
`
const MainInformation = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;
`
const UserAvatar = styled.div`
	flex: 0 0 120px;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	background-color: #ffffff85;
`
const MainInputs = styled.div`
	width: 100%;
`
const SignInInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-bottom: 16px;
	width: 100%;
	&:last-child {
		margin-bottom: 0px;
	}
`
const SignInInputLabel = styled.label`
	font-family: 'Mulish';
	font-weight: 800;
	font-size: 12px;
	line-height: 20px;
	letter-spacing: 0.21em;
	text-transform: uppercase;
	color: #CDCDCD;
`
const Actions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const EditUser = ({ clickHandler, currentUser, setConfirm }: IProps) => {
	const firstname = useInput(currentUser.firstname);
	const lastname = useInput(currentUser.lastname);
	const email = useInput(currentUser.email);
	const currentPassword = useInput('');
	const newPassword = useInput('');
	const confirmNewPassword = useInput('');
	const [change, { isSuccess: isChangeSuccess }] = useChangeUserMutation();
	const navigate = useNavigate()

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}
	const saveHandler = () => {
		change({
			firstname: firstname.value,
			lastname: lastname.value,
			currentPassword: currentPassword.value,
			newPassword: newPassword.value,
			confirmNewPassword: confirmNewPassword.value,
			email: email.value,
		})
	}
	useEffect(() => {
		if (isChangeSuccess) {
			clickHandler()
			navigate(-1)
		}
	}, [isChangeSuccess, clickHandler, navigate])

	return (
		<Popup>
			<Header>
				<Title>Edit Profile</Title>
				<Cross onClick={clickHandler}></Cross>
			</Header>
			<Form onSubmit={e => submitHandler(e)}>
				<MainInformation>
					<UserAvatar />
					<MainInputs>
						<SignInInput>
							<SignInInputLabel htmlFor='edit-firstname'>firstname</SignInInputLabel>
							<Input
								inputEntity={firstname}
								name='edit-firstname'
								placeholder='Enter firstname'
								autoComplete='off'
							/>
						</SignInInput>
						<SignInInput>
							<SignInInputLabel htmlFor='edit-lastname'>lastname</SignInInputLabel>
							<Input
								inputEntity={lastname}
								name='edit-lastname'
								placeholder='Enter lastname'
								autoComplete='off'
							/>
						</SignInInput>
					</MainInputs>
				</MainInformation>
				<SignInInput>
					<SignInInputLabel
						htmlFor='edit-email'>email</SignInInputLabel>
					<Input
						inputEntity={email}
						name='edit-email'
						placeholder='Enter email'
						autoComplete='off'
					/>
				</SignInInput>
				<SignInInput>
					<SignInInputLabel
						htmlFor='edit-current-password'>current password</SignInInputLabel>
					<Input
						inputEntity={currentPassword}
						name='edit-current-password'
						placeholder='Enter current password'
						type='password'
						autoComplete='new-password'
					/>
				</SignInInput>
				<SignInInput>
					<SignInInputLabel
						htmlFor='edit-new-password'>new password</SignInInputLabel>
					<Input
						inputEntity={newPassword}
						name='edit-new-password'
						placeholder='Enter new password'
						type='password'
						autoComplete='off'
					/>
				</SignInInput>
				<SignInInput>
					<SignInInputLabel
						htmlFor='edit-confirm-new-password'>
						confirm new password
					</SignInInputLabel>
					<Input
						inputEntity={confirmNewPassword}
						name='edit-confirm-new-password'
						placeholder='Enter new password'
						type='password'
						autoComplete='off'
					/>
				</SignInInput>
				<Actions>
					<ActionButton color='dark' clickHandler={setConfirm}>
						Delete Account
					</ActionButton>
					<ActionButton color='gradient' clickHandler={saveHandler}>
						Save
					</ActionButton>
				</Actions>
			</Form>
		</Popup>
	)
}

export default EditUser