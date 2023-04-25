import React, { useEffect } from 'react'
import { useInput } from '../../utils/hooks/useInput'
import styled from 'styled-components';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from './authWithApiSlice';
import { useAppDispatch } from '../../app/hooks';
import { setCredentials } from './authSlice';

const SignInWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 205px;
	margin-bottom: 100px;
`
const SignInBody = styled.div`
	background: #161616;
	width: 560px;
	padding: 40px;
	border-radius: 24px;
`
const Title = styled.div`
	font-family: 'Mulish';
	font-weight: 700;
	font-size: 36px;
	line-height: 40px;
	color: #FFFFFF;
	margin-bottom: 40px;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
`
const SignInInputs = styled.div`
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
const SignInBottom = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`
const SignInButton = styled(Button)`
	text-transform: uppercase;
`
const SignInLink = styled(Link)`
	font-size: 14px;
`

const SignIn = () => {
	const email = useInput('');
	const password = useInput('');
	const [login, { isSuccess, data: userData }] = useLoginMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (isSuccess && userData) {
			dispatch(setCredentials({
				user: {
					firstname: userData.user.firstname,
					lastname: userData.user.lastname,
				},
				accessToken: userData.accessToken,
				id: userData.id,
			}))
			email.sendData()
			password.sendData()
			navigate('/welcome', {
				replace: true,
			})
		}
	})
	const clickHandler = () => {
		login({
			email: email.value,
			password: password.value,
		})
	}
	return (
		<SignInWrapper>
			<SignInBody>
				<Title>Sign In</Title>
				<Form>
					<SignInInputs>
						<SignInInput>
							<SignInInputLabel htmlFor='signin-email'>email</SignInInputLabel>
							<Input inputEntity={email} name='signin-email' />
						</SignInInput>
						<SignInInput>
							<SignInInputLabel htmlFor='password-email'>password</SignInInputLabel>
							<Input inputEntity={password} name='password-email' type='password' />
						</SignInInput>
					</SignInInputs>
					<SignInBottom>
						<SignInButton isBlue={false} clickHandler={clickHandler}>SIGN IN</SignInButton>
						<SignInLink to='/auth/signup'>Doesn't have an account?</SignInLink>
					</SignInBottom>
				</Form>
			</SignInBody>
		</SignInWrapper>
	)
}

export default SignIn