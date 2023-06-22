import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useInput } from '../../../../utils/hooks/useInput'
import Input from '../../../UI/Input'
import { ProjectCredentialsItem } from './ProjectCredentials'
import DropDown from '../../../UI/DropDown'
import Textarea from '../../../UI/Textarea';
import { Updater } from 'use-immer'
import { InputValidation, ProductType } from '../../../../utils/types'

interface IProps {
	changeMainState: Updater<ProductType>;
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
const InputList = styled.form`
	margin-bottom: 20px;
`
const InputListBlock = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
`
const InputListItem = styled.li`
	font-family: 'Mulish';
	font-size: 16px;
	line-height: 18px;
	color: #FFFFFF;
	position: relative;
	padding-left: 25px;
`
const DeleteButton = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 20px;
	height: 20px;
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
		top: calc(50% - 5px);
		left: calc(50% - 1px);
		width: 2px;
		height: 10px;
		background-color: #1DAEFF;
	}
	&::before {
		transform: rotate(45deg);
	}
	&::after {
		transform: rotate(-45deg);
	}
`


const AdditionSection = ({ changeMainState }: IProps) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [currentCurrency, setCurrentCurrency] = useState<string>('Dollar $');
	const [textareaValue, setTextareaValue] = useState<string>('');
	const [pros, setPros] = useState<string[]>([]);
	const [videoLinks, setVideoLinks] = useState<string[]>([]);
	const prosItem = useInput('');
	const size = useInput('', ['emptyCheck']);
	const garage = useInput('', ['emptyCheck']);
	const bedrooms = useInput('', ['emptyCheck']);
	const bathrooms = useInput('', ['emptyCheck']);
	const year = useInput('', ['emptyCheck']);
	const floors = useInput('', ['emptyCheck']);
	const videoLinksEntity = useInput('');

	const submitHandler = (e: React.FormEvent<HTMLFormElement>, changeState: React.Dispatch<React.SetStateAction<string[]>>, stateEntity: InputValidation) => {
		e.preventDefault();
		changeState(prev => [
			...prev,
			stateEntity.value,
		])
		stateEntity.sendData()
	}

	useEffect(() => {
		changeMainState(prev => {
			prev.square = +size.value;
			prev.garage = +garage.value;
			prev.bedrooms = +bedrooms.value;
			prev.bathrooms = +bathrooms.value;
			prev.buildYear = +year.value;
			prev.floors = +floors.value;
			prev.videoLinks = videoLinks;
			prev.currency = currentCurrency;
			prev.description = textareaValue;
			prev.pros = pros;
		})
	}, [changeMainState, garage, size, bedrooms, bathrooms, year, floors, videoLinks, currentCurrency, textareaValue, pros])
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
						<SignInInputLabel htmlFor='size'>size</SignInInputLabel>
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
						<SignInInputLabel htmlFor='garage'>garage</SignInInputLabel>
						<Input inputEntity={garage} name='garage' type='text' />
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
				<InputList onSubmit={e => submitHandler(e, setPros, prosItem)}>
					<SignInInput>
						<SignInInputLabel htmlFor='pros'>pros</SignInInputLabel>
						<Input inputEntity={prosItem} name='pros' type='text' />
					</SignInInput>
					{pros.length !== 0 &&
						<InputListBlock>
							{pros.map((item, index) => (
								<InputListItem key={item + index}>
									{item}
									<DeleteButton onClick={() => setPros(prev => prev.filter(prosItem => prosItem !== item))}>
										<DeleteButtonBody />
									</DeleteButton>
								</InputListItem>
							))}
						</InputListBlock>
					}
				</InputList>
				<InputList onSubmit={e => submitHandler(e, setVideoLinks, videoLinksEntity)}>
					<SignInInput>
						<SignInInputLabel htmlFor='video-links'>video links</SignInInputLabel>
						<Input inputEntity={videoLinksEntity} name='video-links' type='text' />
						{videoLinks.length !== 0 &&
							<InputListBlock>
								{videoLinks.map((item, index) => (
									<InputListItem key={item + index}>
										{item}
										<DeleteButton onClick={() => setVideoLinks(prev => prev.filter(videoLink => videoLink !== item))}>
											<DeleteButtonBody />
										</DeleteButton>
									</InputListItem>
								))}
							</InputListBlock>
						}
					</SignInInput>
				</InputList>
			</Content>
		</AdditionSectionItem>
	)
}

export default AdditionSection