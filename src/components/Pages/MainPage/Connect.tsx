import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../app/hooks'
import { createConnect } from '../../../features/connect/connectSlice'
import { useInput } from '../../../utils/hooks/useInput'
import { Container } from '../../../utils/styles'
import Button from '../../UI/Button'

const Wrapper = styled.div`
	padding: 220px 0;
`
const ConnectContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 90px;
`
const TextContent = styled.div`
	
`
const Title = styled.div`
	font-family: 'Montserrat';
	color: #fff;
	font-weight: 700;
	font-size: 64px;
	line-height: 78px;
	span {
		color: #1DAEFF;
	}
`
const Text = styled.div`
	font-family: 'Montserrat';
	font-size: 32px;
	line-height: 111.02%;
	color: rgba(255, 251, 251, 0.65);
`
const FormContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 64px;
`
const InputsContainer = styled.div`
	display: flex;
	gap: 68px 15px;
	flex-wrap: wrap;
`
const InputField = styled.input`
	outline: none;
	-webkit-appearance: none;
	background-color: transparent;
	width: 100%;
	height: 100%;
	color: #F2F2F2;
	&::placeholder {
		font-family: 'Montserrat';
		font-size: 16px;
		line-height: 20px;
		color: #F2F2F2;
	}
`
const InputItem = styled.div`
	flex: 1 0 225px;
	height: 26px;
	border-bottom: 1px solid #F2F2F2;
	&._error {
		border-bottom: 1px solid red;
		& ${InputField} {
			&::placeholder {
				color: red;
			}
		}
	}
`
const TextareaField = styled.textarea`
	-webkit-appearance: none;
	background-color: transparent;
	width: 100%;
	resize: none;
	height: 100%;
	color: #F2F2F2;
	&::placeholder {
		font-family: 'Montserrat';
		font-size: 16px;
		line-height: 20px;
		color: #F2F2F2;
	}
`
const ErrorLabel = styled.label`
	font-family: 'Montserrat';
	padding-top: 5px;
	font-size: 12px;
	color: red;
	opacity: 0;
	visibility: hidden;
	&._show {
		opacity: 1;
		visibility: visible;
	}
`

const Connect = () => {
	const name = useInput('', ['emptyCheck']);
	const email = useInput('', ['emptyCheck']);
	const number = useInput('', ['emptyCheck']);
	const interest = useInput('');
	const message = useInput('');

	const dispatch = useAppDispatch();

	const onSubmitHandler = () => {
		if (!name.isError || !email.isError || !number.isError) {
			dispatch(createConnect({
				name: name.value,
				email: email.value,
				phoneNumber: number.value,
				interest: interest.value,
				message: message.value,
			}));
			name.sendData();
			email.sendData();
			number.sendData();
			interest.sendData();
			message.sendData();
		}
	}
	return (
		<Wrapper>
			<ConnectContainer>
				<TextContent>
					<Title>
						Did You Find Your <span>Dream Home?</span>
					</Title>
					<Text>
						Thank you for getting in touch! if you find your dream home connect with us
					</Text>
				</TextContent>
				<FormContent>
					<InputsContainer>
						<InputItem className={name.isError ? '_error' : ''}>
							<InputField
								placeholder='Your Name*'
								value={name.value}
								onChange={event => name.onChangeHandler(event)}
								onBlur={() => name.onBlurHandler()}
								name='name'
							/>
							<ErrorLabel htmlFor='name' className={name.isError ? '_show' : ''}>
								All field mandatory
							</ErrorLabel>
						</InputItem>
						<InputItem className={email.isError ? '_error' : ''}>
							<InputField
								placeholder='Your Email*'
								value={email.value}
								onChange={event => email.onChangeHandler(event)}
								onBlur={() => email.onBlurHandler()}
								name='email'
							/>
							<ErrorLabel htmlFor='email' className={email.isError ? '_show' : ''}>
								All field mandatory
							</ErrorLabel>
						</InputItem>
						<InputItem className={number.isError ? '_error' : ''}>
							<InputField
								placeholder='Phone Number*'
								value={number.value}
								onChange={event => number.onChangeHandler(event)}
								onBlur={() => number.onBlurHandler()}
								name='number'
							/>
							<ErrorLabel htmlFor='number' className={number.isError ? '_show' : ''}>
								All field mandatory
							</ErrorLabel>
						</InputItem>
						<InputItem>
							<InputField
								placeholder='Interested in'
								value={interest.value}
								onChange={event => interest.onChangeHandler(event)}
							/>
						</InputItem>
						<InputItem>
							<TextareaField
								placeholder='Message'
								value={message.value}
								onChange={event => message.onChangeHandler(event)}
							/>
						</InputItem>
					</InputsContainer>
					<Button isBlue={true} clickHandler={onSubmitHandler} >Submit</Button>
				</FormContent>
			</ConnectContainer>
		</Wrapper>
	)
}

export default Connect