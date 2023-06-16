import React, { useState } from 'react'
import styled from 'styled-components'
import { useInput } from '../../../../utils/hooks/useInput'
import DropDown from '../../../UI/DropDown'
import Input from '../../../UI/Input'

export const ProjectCredentialsItem = styled.div`
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


const ProjectCredentials = () => {
	const address = useInput('', ['emptyCheck']);
	const price = useInput('', ['emptyCheck']);
	const neighbourhood = useInput('', ['emptyCheck']);
	const [currentPropertyType, setCurrentPropertyType] = useState<number>(0);
	return (
		<ProjectCredentialsItem>
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
					options={['House', 'Villa', 'Apartment']}
					currentOption={currentPropertyType}
					setCurrentOption={setCurrentPropertyType}
				/>
			</SignInInput>
		</ProjectCredentialsItem>
	)
}

export default ProjectCredentials