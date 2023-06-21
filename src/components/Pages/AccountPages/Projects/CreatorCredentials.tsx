import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ProjectCredentialsItem } from './ProjectCredentials'
import Input from '../../../UI/Input'
import { useInput } from '../../../../utils/hooks/useInput'
import { useGetUserQuery } from '../../../../app/api/userApiSlice'
import { useAppSelector } from '../../../../app/hooks'
import { getId } from '../../../../features/auth/authSlice'
import { IProjectProperties } from './NewProject';
import { Updater } from 'use-immer'
import { AddedUserType } from '../../../../utils/types'


interface IProps {
	changeMainState: Updater<IProjectProperties>;
}

const CreatorCredentialsItem = styled.div`
	margin-bottom: 36px;
`
const CreatorCredentialFields = styled(ProjectCredentialsItem)`
	margin-bottom: 36px;
`
const AddedUsers = styled.div`
	display: flex;
	gap: 20px;
`
const AddedUser = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
	position: relative;
	max-width: 80px;
`
const UserAvatar = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: #ffffff96;
`
const Text = styled.div`
	font-family: 'Mulish';
	font-weight: 800;
	font-size: 9px;
	line-height: 12px;
	letter-spacing: 0.21em;
	text-transform: uppercase;
	color: #FFFFFF;
	text-align: center;
`
const DeleteButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #FF453A;
	cursor: pointer;
`
const DeleteButtonBody = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	&::before,
	&::after {
		content:'';
		position: absolute;
		top: calc(50% - 6px);
		left: calc(50% - 1px);
		width: 2px;
		height: 10px;
		background-color: #fff;
	}
	&::before {
		transform: rotate(45deg);
	}
	&::after {
		transform: rotate(-45deg);
	}
`
const AddPerson = styled(AddedUser)``
const AddPersonCircle = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: 2px solid #0E0E0E;
	background-color: transparent;
	position: relative;
	cursor: pointer;
	&::before,
	&::after {
		content:'';
		position: absolute;
		top: calc(50% - 1px);
		left: calc(50% - 8px);
		background-color: #1DAEFF;
		height: 2px;
		width: 16px;
		border-radius: 4px;
	}
	&::before {
		transform: rotate(90deg);
	}
`
const TextBlue = styled(Text)`
	color: #1DAEFF;
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

const CreatorCredentials = ({ changeMainState }: IProps) => {
	const id = useAppSelector(getId);
	const { data: currentUser, isSuccess } = useGetUserQuery(id as string);
	const firstname = useInput('', ['emptyCheck']);
	const lastname = useInput('', ['emptyCheck']);
	const phone = useInput('', ['emptyCheck']);
	const email = useInput('', ['emptyCheck']);
	const [addedUsers, setAddedUsers] = useState<AddedUserType[]>([]);

	const addPersonHandler = () => {
		if (firstname.value && lastname.value && phone.value && email.value) {
			const duplicated = addedUsers.filter(item => item.email === email.value);
			if (!duplicated.length) {
				setAddedUsers([
					{
						firstname: firstname.value,
						lastname: lastname.value,
						email: email.value,
						phone: phone.value
					},
					...addedUsers
				])
				firstname.sendData()
				lastname.sendData()
				email.sendData()
				phone.sendData()
			}
		}
	}
	const deletePersonHandler = (email: string) => {
		const person = addedUsers.find(user => user.email === email);
		if (person) {
			setAddedUsers(prev => (
				prev.filter(user => user !== person)
			))
		}
	}

	useEffect(() => {
		if (isSuccess && currentUser) {
			setAddedUsers([
				{
					firstname: currentUser.firstname,
					lastname: currentUser.lastname,
					email: currentUser.email,
					phone: currentUser.phoneNumber
				}
			])
		}
	}, [isSuccess, currentUser])

	useEffect(() => {
		changeMainState(prev => {
			prev.creators = addedUsers;
		})
	}, [changeMainState, addedUsers])
	return (
		<CreatorCredentialsItem>
			<CreatorCredentialFields>
				<SignInInput>
					<SignInInputLabel htmlFor='firstname'>firstname</SignInInputLabel>
					<Input inputEntity={firstname} name='firstname' type='text' />
				</SignInInput>
				<SignInInput>
					<SignInInputLabel htmlFor='lastname'>lastname</SignInInputLabel>
					<Input inputEntity={lastname} name='lastname' type='text' />
				</SignInInput>
				<SignInInput>
					<SignInInputLabel htmlFor='email-address'>email address</SignInInputLabel>
					<Input inputEntity={email} name='email-address' type='email' />
				</SignInInput>
				<SignInInput>
					<SignInInputLabel htmlFor='phone-number'>phone number</SignInInputLabel>
					<Input inputEntity={phone} name='phone-number' type='phone' />
				</SignInInput>
			</CreatorCredentialFields>
			<AddedUsers>
				<AddPerson>
					<AddPersonCircle onClick={addPersonHandler} />
					<TextBlue>add person</TextBlue>
				</AddPerson>
				{addedUsers.map(addedUser => (
					<AddedUser key={addedUser.email}>
						<UserAvatar />
						<Text>{addedUser.firstname} {addedUser.lastname}</Text>
						{addedUser.email !== currentUser?.email &&
							<>
								<DeleteButton onClick={() => deletePersonHandler(addedUser.email)}>
									<DeleteButtonBody />
								</DeleteButton>
							</>
						}
					</AddedUser>
				))}
			</AddedUsers>
		</CreatorCredentialsItem>
	)
}

export default CreatorCredentials