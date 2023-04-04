import { nanoid } from 'nanoid'
import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../app/hooks'
import { sendMessage } from '../../../features/message/messagesSlice'
import { useInput } from '../../../utils/hooks/useInput'
import Button from '../../UI/Button'

interface Props {
	owner: string;
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 30px;
`
const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`
const Input = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`
const InputField = styled.input`
	height: 40px;
	background: #0E0E0E;
	border-radius: 5px;
	outline: none;
	color: #fff;
	padding-left: 8px;
`
const TextareaField = styled.textarea`
	height: 80px;
	background: #0E0E0E;
	border-radius: 5px;
	resize: none;
	outline: none;
	color: #fff;
	padding: 8px;
`
const InputSignature = styled.label`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 16px;
	line-height: 139.52%;
	color: #FFFBFB;
	&._error {
		color: red;
	}
`
const Validation = styled.div`
	color: red;
	margin-top: 4px;
	display: none;
	&._show {
		display: block;
	}
`
const MessageFormButton = styled(Button)`
	margin-top: 30px;
`

const MessageForm = ({ owner }: Props) => {
	const name = useInput('', ['emptyCheck']);
	const email = useInput('', ['emptyCheck']);
	const message = useInput('', ['emptyCheck']);
	const dispatch = useAppDispatch();
	const sendMessageHandler = () => {
		if (!name.isError && !email.isError && !message.isError) {
			dispatch(sendMessage({
				id: nanoid(),
				name: name.value,
				email: email.value,
				message: message.value,
				owner,
			}))
			name.sendData()
			email.sendData()
			message.sendData()
		}
	}
	return (
		<Wrapper>
			<InputWrapper>
				<Input id='test'>
					<InputSignature htmlFor='name' className={name.isError ? '_error' : ''}>Name</InputSignature>
					<InputField
						name='name'
						value={name.value}
						onChange={name.onChangeHandler}
						onBlur={name.onBlurHandler}
					/>
					<Validation className={name.isError ? '_show' : ''}>All fields mandatory</Validation>
				</Input>
				<Input>
					<InputSignature htmlFor='email' className={email.isError ? '_error' : ''}>Email</InputSignature>
					<InputField
						name='email'
						value={email.value}
						onChange={email.onChangeHandler}
						onBlur={email.onBlurHandler}
					/>
					<Validation className={email.isError ? '_show' : ''}>All fields mandatory</Validation>
				</Input>
				<Input>
					<InputSignature htmlFor='message' className={message.isError ? '_error' : ''}>Message</InputSignature>
					<TextareaField
						name='message'
						value={message.value}
						onChange={message.onChangeHandler}
						onBlur={message.onBlurHandler}
					/>
					<Validation className={message.isError ? '_show' : ''}>All fields mandatory</Validation>
				</Input>
			</InputWrapper>
			<MessageFormButton isBlue={true} clickHandler={sendMessageHandler}>
				Send
			</MessageFormButton>
		</Wrapper>
	)
}

export default MessageForm