import React from 'react'
import { useInput } from '../../../utils/hooks/useInput'
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../../features/auth/authWithApiSlice';
import { useAppDispatch } from '../../../app/hooks';
import { setCredentials } from '../../../features/auth/authSlice';

const SignUpWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 205px;
	margin-bottom: 100px;
`
const SignUpBody = styled.div`
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
const SignUpInputs = styled.div`
	width: 100%;
`
const SignUpInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-bottom: 16px;
	width: 100%;
	&:last-child {
		margin-bottom: 0px;
	}
`
const SignUpInputLabel = styled.label`
	font-family: 'Mulish';
	font-weight: 800;
	font-size: 12px;
	line-height: 20px;
	letter-spacing: 0.21em;
	text-transform: uppercase;
	color: #CDCDCD;
`
const SignUpBottom = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`
const SignUpButton = styled(Button)`
	text-transform: uppercase;
`
const SignUpLink = styled(Link)`
	font-size: 14px;
`

const SignUp = () => {
	const [register, { isLoading, isSuccess, data: registerResponse }] = useRegisterUserMutation()
	const firstname = useInput('');
	const lastname = useInput('');
	const email = useInput('');
	const phonenumber = useInput('');
	const country = useInput('');
	const password = useInput('');

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const clickHandler = async () => {
		await register({
			firstname: firstname.value,
			lastname: lastname.value,
			email: email.value,
			password: password.value,
			phoneNumber: phonenumber.value,
			country: country.value,
		})
		if (isSuccess) {
			dispatch(setCredentials({
				user: {
					firstname: firstname.value,
					lastname: lastname.value,
				},
				token: registerResponse?.accessToken as string,
			}))
			navigate('/welcome', {
				replace: true,
			})
			firstname.sendData()
			lastname.sendData()
			email.sendData()
			phonenumber.sendData()
			country.sendData()
			password.sendData()
		}
	}
	return (
		<SignUpWrapper>
			<SignUpBody>
				<Title>Sign Up</Title>
				<Form>
					<SignUpInputs>
						<SignUpInput>
							<SignUpInputLabel htmlFor='signup-firstname'>firstname</SignUpInputLabel>
							<Input inputEntity={firstname} name='signup-firstname' />
						</SignUpInput>
						<SignUpInput>
							<SignUpInputLabel htmlFor='signup-lastname'>lastname</SignUpInputLabel>
							<Input inputEntity={lastname} name='signup-lastname' />
						</SignUpInput>
						<SignUpInput>
							<SignUpInputLabel htmlFor='signin-email'>email</SignUpInputLabel>
							<Input inputEntity={email} name='signin-email' />
						</SignUpInput>
						<SignUpInput>
							<SignUpInputLabel htmlFor='signup-phonenumber'>phone number</SignUpInputLabel>
							<Input inputEntity={phonenumber} name='signup-phonenumber' />
						</SignUpInput>
						<SignUpInput>
							<SignUpInputLabel htmlFor='signup-country'>country</SignUpInputLabel>
							<Input inputEntity={country} name='signup-country' />
						</SignUpInput>
						<SignUpInput>
							<SignUpInputLabel htmlFor='password-email'>password</SignUpInputLabel>
							<Input inputEntity={password} name='password-email' />
						</SignUpInput>
					</SignUpInputs>
					<SignUpBottom>
						<SignUpButton isBlue={false} clickHandler={clickHandler}>SIGN UP</SignUpButton>
						<SignUpLink to='http://localhost:3000/auth/signin'>Already have an account?</SignUpLink>
					</SignUpBottom>
				</Form>
			</SignUpBody>
		</SignUpWrapper>
	)
}

export default SignUp