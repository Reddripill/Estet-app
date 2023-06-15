import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AccountContainer } from '../../../../utils/styles'
import ActionButton from '../../../UI/ActionButton'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../../../utils/hooks/useInput'
import Input from '../../../UI/Input'
import DropDown from '../../../UI/DropDown'
import Checkbox from '../../../UI/Checkbox'
import { useGetUserQuery } from '../../../../app/api/userApiSlice'
import { useAppSelector } from '../../../../app/hooks'
import { getId } from '../../../../features/auth/authSlice'
import Spinner from '../../../UI/Spinner'

type AddedUserType = {
	firstname: string;
	lastname: string;
	phone: string;
	email: string;
}

const Wrapper = styled.div`
	padding-top: 132px;
`
const Title = styled.div`
	font-family: 'Mulish';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 40px;
	color: #FFFFFF;
`
const Head = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40px;
`
const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`
const Content = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 32px;
`
const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
`
const AddImageSection = styled.div`
	
`
const ProjectCredentials = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px 40px;
	margin-bottom: 12px;
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
const CryptoSection = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	margin-bottom: 100px;
`
const CreatorCredentials = styled.div`
	margin-bottom: 36px;
`
const CreatorCredentialFields = styled(ProjectCredentials)`
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


const NewProject = () => {
	const id = useAppSelector(getId);
	const { data: currentUser, isLoading, isSuccess } = useGetUserQuery(id as string);
	const [currentPropertyType, setCurrentPropertyType] = useState<number>(0);
	const [isExplore, setIsExplore] = useState<boolean>(false);
	const [isAccept, setIsAccept] = useState<boolean>(false);
	const [addedUsers, setAddedUsers] = useState<AddedUserType[]>([]);
	const address = useInput('', ['emptyCheck']);
	const price = useInput('', ['emptyCheck']);
	const neighbourhood = useInput('', ['emptyCheck']);
	const firstname = useInput('', ['emptyCheck']);
	const lastname = useInput('', ['emptyCheck']);
	const phone = useInput('', ['emptyCheck']);
	const email = useInput('', ['emptyCheck']);
	const navigate = useNavigate();

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
	if (isLoading) {
		return <Spinner />
	}

	return (
		<Wrapper>
			<AccountContainer>
				<Head>
					<Title>New Project</Title>
					<Actions>
						<ActionButton color='dark' clickHandler={() => navigate(-1)}>back</ActionButton>
						<ActionButton color='gradient'>create</ActionButton>
					</Actions>
				</Head>
				<Content>
					<MainContent>
						<ProjectCredentials>
							<SignInInput>
								<SignInInputLabel htmlFor='adress'>address</SignInInputLabel>
								<Input inputEntity={address} name='adress' type='text' />
							</SignInInput>
							<SignInInput>
								<SignInInputLabel htmlFor='price'>price</SignInInputLabel>
								<Input inputEntity={price} name='price' type='text' />
							</SignInInput>
							<SignInInput>
								<SignInInputLabel htmlFor='neighbourhood'>neighbourhood</SignInInputLabel>
								<Input inputEntity={neighbourhood} name='neighbourhood' type='text' />
							</SignInInput>
							<SignInInput>
								<SignInInputLabel htmlFor='property-type'>property type</SignInInputLabel>
								<DropDown
									options={['house', 'villa', 'apartment']}
									currentOption={currentPropertyType}
									setCurrentOption={setCurrentPropertyType}
								/>
							</SignInInput>
						</ProjectCredentials>
						<CryptoSection>
							<Checkbox setState={setIsExplore}>I want explore selling as an NFT</Checkbox>
							<Checkbox setState={setIsAccept}>I’ll also accept cryptocurrencies</Checkbox>
						</CryptoSection>
						<CreatorCredentials>
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
						</CreatorCredentials>
					</MainContent>
					<AddImageSection>
					</AddImageSection>
				</Content>
			</AccountContainer>
		</Wrapper>
	)
}

export default NewProject;