import React from 'react'
import { UserCredentials } from '../../../utils/types';
import styled from 'styled-components';
import Input from '../../UI/Input';
import { useInput } from '../../../utils/hooks/useInput';
import Button from '../../UI/Button';

interface IProps {
	clickHandler: () => void;
	currentUser: UserCredentials;
}

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	right: 0;
	z-index: 150;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Body = styled.div`
	margin: 20px 0;
	width: 560px;
	background: #0A0A0A;
	box-shadow: 0px 17px 33px rgba(255, 255, 255, 0.2);
	border-radius: 40px;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	padding: 40px;
`
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

const EditUser = ({ clickHandler, currentUser }: IProps) => {
	const firstname = useInput(currentUser.firstname);
	const lastname = useInput(currentUser.lastname);
	const email = useInput(currentUser.email);
	const currentPassword = useInput('');
	const newPassword = useInput('');
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}
	return (
		<Wrapper>
			<Body>
				<Container>
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
									<Input inputEntity={firstname} name='edit-firstname' />
								</SignInInput>
								<SignInInput>
									<SignInInputLabel htmlFor='edit-lastname'>lastname</SignInInputLabel>
									<Input inputEntity={lastname} name='edit-lastname' />
								</SignInInput>
							</MainInputs>
						</MainInformation>
						<SignInInput>
							<SignInInputLabel htmlFor='edit-email'>email</SignInInputLabel>
							<Input inputEntity={email} name='edit-email' />
						</SignInInput>
						<SignInInput>
							<SignInInputLabel htmlFor='edit-current-password'>current password</SignInInputLabel>
							<Input inputEntity={currentPassword} name='edit-current-password' />
						</SignInInput>
						<SignInInput>
							<SignInInputLabel htmlFor='edit-current-new'>new password</SignInInputLabel>
							<Input inputEntity={newPassword} name='edit-current-new' />
						</SignInInput>
						<Actions>
							<Button isBlue={false}>
								Delete Account
							</Button>
							<Button isBlue={false}>
								Save
							</Button>
						</Actions>
					</Form>
				</Container>
			</Body>
		</Wrapper>
	)
}

export default EditUser