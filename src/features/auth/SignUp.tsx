import React, { useEffect } from 'react'
import { useInput } from '../../utils/hooks/useInput';
import styled from 'styled-components';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from './authWithApiSlice';
import { useAppDispatch } from '../../app/hooks';
import { setCredentials } from './authSlice';
import { nanoid } from 'nanoid';

const SignUpWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 105px;
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
	const [register, { isSuccess, data: registerResponse }] = useRegisterUserMutation()
	const firstname = useInput('');
	const lastname = useInput('');
	const email = useInput('');
	const phonenumber = useInput('');
	const country = useInput('');
	const password = useInput('');

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		document.title = 'Sign Up'
	}, [])
	useEffect(() => {
		if (isSuccess && registerResponse) {
			dispatch(setCredentials({
				user: {
					firstname: firstname.value,
					lastname: lastname.value,
				},
				accessToken: registerResponse?.accessToken as string,
				id: registerResponse.id as string,
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
	})

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		import('jdenticon').then(({ toSvg }) => {
			const svgAvatar = toSvg(nanoid(), 130);
			const blob = new Blob([svgAvatar], { type: 'image/svg+xml' });
			const reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => {
				if (reader.result) {
					register({
						firstname: firstname.value,
						lastname: lastname.value,
						email: email.value,
						password: password.value,
						phoneNumber: phonenumber.value,
						country: country.value,
						avatar: reader.result as string,
					})
				}
			}
		})
	}
	return (
		<SignUpWrapper>
			<SignUpBody>
				<Title>Sign Up</Title>
				<Form onSubmit={e => submitHandler(e)}>
					<SignUpInputs>
						<SignUpInput>
							<SignUpInputLabel htmlFor='signup-firstname'>firstname</SignUpInputLabel>
							<Input inputEntity={firstname} name='signup-firstname' autofocus={true} />
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
							<Input inputEntity={password} name='password-email' type='password' />
						</SignUpInput>
					</SignUpInputs>
					<SignUpBottom>
						<SignUpButton isBlue={false} isSubmit={true}>SIGN UP</SignUpButton>
						<SignUpLink to='/auth/signin'>Already have an account?</SignUpLink>
					</SignUpBottom>
				</Form>
			</SignUpBody>
		</SignUpWrapper>
	)
}

export default SignUp