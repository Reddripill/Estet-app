import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useInput } from '../../../../utils/hooks/useInput'
import Input from '../../../UI/Input'
import { ProjectCredentialsItem } from './ProjectCredentials'
import DropDown from '../../../UI/DropDown'
import Textarea from '../../../UI/Textarea';
import { Updater } from 'use-immer'
import { IProjectProperties } from './NewProject'

interface IProps {
	changeMainState: Updater<IProjectProperties>;
}

const AdditionSectionItem = styled.div`
	padding-bottom: 100px;
`
const AdditionSectionTitle = styled.button`
	display: flex;
	align-items: center;
	gap: 15px;
	margin-bottom: 50px;
	cursor: pointer;
`
const AdditionSectionText = styled.div`
	font-family: 'Mulish';
	font-weight: 700;
	font-size: 24px;
	line-height: 40px;
	color: #1DAEFF;
`
const AdditionSectionArrow = styled.div`
	display: inline-block;
	border: solid #1DAEFF;
	border-width: 0 4px 4px 0;
	padding: 4px;
	transform: rotate(45deg);
	&._active {
		transform: rotate(-135deg);
	}
`
const Content = styled.div`
	display: none;
	&._active {
		display: block;
	}
`
const Title = styled.div`
	font-family: 'Mulish';
	font-weight: 700;
	font-size: 24px;
	line-height: 40px;
	color: #FFFFFF;
	margin-bottom: 50px;
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
const AdditionSectionInputs = styled(ProjectCredentialsItem)`
	margin-bottom: 35px;
`
const TextareaSection = styled.div`
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
const AgentTextareaSection = styled(TextareaSection)`
	margin-bottom: 20px;
`


const AdditionSection = ({ changeMainState }: IProps) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [currentCurrency, setCurrentCurrency] = useState<string>('Dollar $');
	const [textareaValue, setTextareaValue] = useState<string>('');
	const [textareaAgentValue, setTextareaAgentValue] = useState<string>('');
	const size = useInput('', ['emptyCheck']);
	const bedrooms = useInput('', ['emptyCheck']);
	const bathrooms = useInput('', ['emptyCheck']);
	const year = useInput('', ['emptyCheck']);
	const floors = useInput('', ['emptyCheck']);
	const videoLinks = useInput('');

	useEffect(() => {
		changeMainState(prev => {
			prev.size = +size.value;
			prev.bedrooms = +bedrooms.value;
			prev.bathrooms = +bathrooms.value;
			prev.year = +year.value;
			prev.floors = +floors.value;
			prev.videoLinks = videoLinks.value;
			prev.currency = currentCurrency
			prev.description = textareaValue
			prev.agentRemarks = textareaAgentValue
		})
	}, [changeMainState, size, bedrooms, bathrooms, year, floors, videoLinks, currentCurrency, textareaValue, textareaAgentValue])
	return (
		<AdditionSectionItem>
			<AdditionSectionTitle type='button' onClick={() => setIsActive(!isActive)}>
				<AdditionSectionText>Additional Details</AdditionSectionText>
				<AdditionSectionArrow className={isActive ? '_active' : ''} />
			</AdditionSectionTitle>
			<Content className={isActive ? '_active' : ''}>
				<Title>Features</Title>
				<AdditionSectionInputs>
					<SignInInput>
						<SignInInputLabel htmlFor='accepted-currencies'>accepted currencies</SignInInputLabel>
						<DropDown
							options={['Dollar $', 'Euro €', 'Ruble ₽']}
							currentOption={currentCurrency}
							setCurrentOption={setCurrentCurrency}
						/>
					</SignInInput>
					<SignInInput>
						<SignInInputLabel htmlFor='adress'>size</SignInInputLabel>
						<Input inputEntity={size} name='size' type='text' />
					</SignInInput>
					<SignInInput>
						<SignInInputLabel htmlFor='bedrooms'>bedrooms</SignInInputLabel>
						<Input inputEntity={bedrooms} name='bedrooms' type='text' />
					</SignInInput>
					<SignInInput>
						<SignInInputLabel htmlFor='bathrooms'>bathrooms</SignInInputLabel>
						<Input inputEntity={bathrooms} name='bathrooms' type='text' />
					</SignInInput>
					<SignInInput>
						<SignInInputLabel htmlFor='year-builds'>year builds</SignInInputLabel>
						<Input inputEntity={year} name='year-builds' type='text' />
					</SignInInput>
					<SignInInput>
						<SignInInputLabel htmlFor='floors'>floors</SignInInputLabel>
						<Input inputEntity={floors} name='floors' type='text' />
					</SignInInput>
				</AdditionSectionInputs>
				<TextareaSection>
					<SignInInputLabel htmlFor='description-textarea'>description</SignInInputLabel>
					<Textarea
						heigth={200}
						value={textareaValue}
						setValue={setTextareaValue}
					/>
				</TextareaSection>
				<AgentTextareaSection>
					<SignInInputLabel htmlFor='description-textarea'>agent remarks</SignInInputLabel>
					<Textarea
						heigth={100}
						value={textareaAgentValue}
						setValue={setTextareaAgentValue}
					/>
				</AgentTextareaSection>
				<SignInInput>
					<SignInInputLabel htmlFor='video-links'>video links</SignInInputLabel>
					<Input inputEntity={videoLinks} name='video-links' type='text' />
				</SignInInput>
			</Content>
		</AdditionSectionItem>
	)
}

export default AdditionSection