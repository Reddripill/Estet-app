import React from 'react'
import { useInput } from '../../../utils/hooks/useInput'
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const SignInWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
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
const SigninInputs = styled.div`
	width: 100%;
`
const SigninInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-bottom: 16px;
	width: 100%;
	&:last-child {
		margin-bottom: 0px;
	}
`
const SigninInputLabel = styled.label`
	font-family: 'Mulish';
	font-weight: 800;
	font-size: 12px;
	line-height: 20px;
	letter-spacing: 0.21em;
	text-transform: uppercase;
	color: #CDCDCD;
`
const SigninButton = styled(Button)`
	text-transform: uppercase;
`

const SignIn = () => {
	const email = useInput('');
	const password = useInput('');
	return (
		<SignInWrapper>
			<SignInBody>
				<Title>Sign In</Title>
				<Form>
					<SigninInputs>
						<SigninInput>
							<SigninInputLabel htmlFor='signin-email'>email</SigninInputLabel>
							<Input inputEntity={email} name='signin-email' />
						</SigninInput>
						<SigninInput>
							<SigninInputLabel htmlFor='password-email'>password</SigninInputLabel>
							<Input inputEntity={password} name='password-email' />
						</SigninInput>
					</SigninInputs>
					<SigninButton isBlue={false}>SIGN IN</SigninButton>
				</Form>
			</SignInBody>
		</SignInWrapper>
	)
}

export default SignIn