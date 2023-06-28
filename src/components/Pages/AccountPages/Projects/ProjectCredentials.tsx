import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useInput } from '../../../../utils/hooks/useInput'
import DropDown from '../../../UI/DropDown'
import Input from '../../../UI/Input'
import { Updater } from 'use-immer'
import { ProductType } from '../../../../utils/types'

interface IProps {
	changeMainState: Updater<ProductType>;
}

export const ProjectCredentialsItem = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px 40px;
	margin-bottom: 20px;
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


const ProjectCredentials = ({ changeMainState }: IProps) => {
	const projectName = useInput('', ['emptyCheck']);
	const address = useInput('', ['emptyCheck']);
	const country = useInput('', ['emptyCheck']);
	const price = useInput('', ['emptyCheck']);
	const neighbourhood = useInput('', ['emptyCheck']);
	const [currentPropertyType, setCurrentPropertyType] = useState<string>('House');
	const [service, setService] = useState<string>('Rent');
	useEffect(() => {
		changeMainState(prev => {
			prev.country = country.value;
			prev.service = service;
			prev.address = address.value;
			prev.price = price.value;
			prev.neighbourhood = neighbourhood.value;
			prev.projectType = currentPropertyType;
			prev.projectName = projectName.value;
		})
	}, [changeMainState,
		country.value,
		service,
		address.value,
		price.value,
		neighbourhood.value,
		currentPropertyType,
		projectName.value
	])
	return (
		<ProjectCredentialsItem>
			<SignInInput>
				<SignInInputLabel htmlFor='project-name'>project name</SignInInputLabel>
				<Input inputEntity={projectName} name='project-name' type='text' />
			</SignInInput>
			<SignInInput>
				<SignInInputLabel htmlFor='country'>country</SignInInputLabel>
				<Input inputEntity={country} name='country' type='text' />
			</SignInInput>
			<SignInInput>
				<SignInInputLabel htmlFor='neighbourhood'>neighbourhood</SignInInputLabel>
				<Input inputEntity={neighbourhood} name='neighbourhood' type='text' />
			</SignInInput>
			<SignInInput>
				<SignInInputLabel htmlFor='adress'>address</SignInInputLabel>
				<Input inputEntity={address} name='adress' type='text' />
			</SignInInput>
			<SignInInput>
				<SignInInputLabel htmlFor='price'>price</SignInInputLabel>
				<Input inputEntity={price} name='price' type='text' />
			</SignInInput>
			<SignInInput>
				<SignInInputLabel htmlFor='property-type'>property type</SignInInputLabel>
				<DropDown
					options={['House', 'Villa', 'Apartment']}
					currentOption={currentPropertyType}
					setCurrentOption={setCurrentPropertyType}
				/>
			</SignInInput>
			<SignInInput>
				<SignInInputLabel htmlFor='service'>service</SignInInputLabel>
				<DropDown
					options={['Rent', 'Buy']}
					currentOption={service}
					setCurrentOption={setService}
				/>
			</SignInInput>
		</ProjectCredentialsItem>
	)
}

export default ProjectCredentials