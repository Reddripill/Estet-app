import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { AccountContainer } from '../../../../utils/styles'
import ActionButton from '../../../UI/ActionButton'
import { useNavigate } from 'react-router-dom'
import Checkbox from '../../../UI/Checkbox'
import { useGetUserQuery } from '../../../../app/api/userApiSlice'
import { useAppSelector } from '../../../../app/hooks'
import { getId } from '../../../../features/auth/authSlice'
import Spinner from '../../../UI/Spinner'
import { useImmer } from 'use-immer'
import ProjectCredentials from './ProjectCredentials'
import CreatorCredentials from './CreatorCredentials'
import AdditionSection from './AdditionSection';
import { RxImage } from 'react-icons/rx'
import { AddedUserType } from '../../../../utils/types'

export interface IProjectProperties {
	address: string;
	price: string;
	neighbourhood: string;
	creators: AddedUserType[];
	checkboxes: {
		isExplore: boolean;
		isAccept: boolean;
	}
	currency: string;
	bedrooms: number;
	bathrooms: number;
	year: number;
	floors: number;
	images: string;
	projectType: string;
	size: number;
	videoLinks: string;
	description: string;
	agentRemarks: string;
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
const CryptoSection = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	margin-bottom: 100px;
`
const AddImageSection = styled.div`
	flex: 0 0 350px;
`
const AddImageBlock = styled.div`
	width: 100%;
	height: 450px;
	background: #0E0E0E;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
	border-radius: 18px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 40px;
	border: none;
	margin-bottom: 40px;
	&._droppable {
		border: 2px solid #1DAEFF;
	}
`
const InputFileElement = styled.input`
	display: none;
`
const PreviewImages = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
`
const PreviewImageItem = styled.li`
	position: relative;
`
const PreviewImage = styled.img`
	height: 150px;
	width: 150px;
`
const DeleteButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
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
		top: calc(50% - 6px);
		left: calc(50% - 1px);
		width: 2px;
		height: 10px;
		background-color: #FF453A;
	}
	&::before {
		transform: rotate(45deg);
	}
	&::after {
		transform: rotate(-45deg);
	}
`


const NewProject = () => {
	const [isExplore, setIsExplore] = useState<boolean>(false);
	const [isAccept, setIsAccept] = useState<boolean>(false);
	const [isDragging, setIsDragging] = useState<boolean>(false)
	const [images, setImages] = useState<string[]>([]);
	const inputFile = useRef<HTMLInputElement>(null)
	const id = useAppSelector(getId);
	const initialState: IProjectProperties = {
		address: '',
		price: '',
		neighbourhood: '',
		creators: [],
		checkboxes: {
			isExplore: isExplore,
			isAccept: isAccept,
		},
		currency: '',
		bedrooms: 0,
		bathrooms: 0,
		year: 0,
		floors: 0,
		images: '',
		projectType: '',
		size: 0,
		videoLinks: '',
		description: '',
		agentRemarks: '',
	}
	const [projectProperties, setProjectProperties] = useImmer<IProjectProperties>(initialState);
	const { isLoading } = useGetUserQuery(id as string);
	const navigate = useNavigate();

	useEffect(() => {
		setProjectProperties(prev => {
			prev.checkboxes.isAccept = isAccept;
			prev.checkboxes.isExplore = isExplore;
		})
	}, [isExplore, isAccept, setProjectProperties])

	const dragOverHandler = (e: React.DragEvent) => {
		e.preventDefault()
	}
	const dropHandler = (e: React.DragEvent) => {
		e.preventDefault();
	}
	const onDragOverHandler = (e: React.DragEvent) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'move';
		setIsDragging(true)
	}
	const onDragLeaveHandler = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false)
	}
	const onDropHandler = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);
		convertImages(e.dataTransfer.files)
	}
	const clickHandler = () => {
		if (inputFile.current) {
			inputFile.current.click()
		}
	}
	const convertImages = (inputImages: FileList | null) => {
		if (inputImages) {
			for (const inputImage of Array.from(inputImages)) {
				const reader = new FileReader();
				const imageType = inputImage.type.split('/')[0];
				if (imageType === 'image') {
					reader.readAsDataURL(inputImage)
				}
				reader.onload = () => {
					if (images.length === 0 || images.some(image => image !== reader.result)) {
						setImages(prev => [
							...prev,
							reader.result as string
						])
					}
				}
				reader.onerror = () => {
					console.log(`Issue in FileReader with ${inputImage.name}`);
				}
			}
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
						<ProjectCredentials changeMainState={setProjectProperties} />
						<CryptoSection>
							<Checkbox setState={setIsExplore}>I want explore selling as an NFT</Checkbox>
							<Checkbox setState={setIsAccept}>I’ll also accept cryptocurrencies</Checkbox>
						</CryptoSection>
						<CreatorCredentials changeMainState={setProjectProperties} />
						<AdditionSection changeMainState={setProjectProperties} />
					</MainContent>
					<AddImageSection>
						<AddImageBlock
							onDragOver={dragOverHandler}
							onDrop={dropHandler}
							onDragOverCapture={e => onDragOverHandler(e)}
							onDragLeave={e => onDragLeaveHandler(e)}
							onDropCapture={e => onDropHandler(e)}
							className={isDragging ? '_droppable' : ''}
						>
							<RxImage style={{ fontSize: 60 }} />
							<ActionButton color='blue' clickHandler={clickHandler}>Upload Poster</ActionButton>
							<InputFileElement
								type="file"
								ref={inputFile}
								onChange={e => convertImages(e.target.files)}
								multiple={true}
							/>
						</AddImageBlock>
						{images.length !== 0 &&
							<PreviewImages>
								{images.map(image => (
									<PreviewImageItem key={image}>
										<PreviewImage src={image} alt='house image' />
										<DeleteButton onClick={() => {
											setImages(prev => {
												return prev.filter(imageItem => imageItem !== image)
											})
										}}>
											<DeleteButtonBody />
										</DeleteButton>
									</PreviewImageItem>
								))}
							</PreviewImages>
						}
					</AddImageSection>
				</Content>
			</AccountContainer>
		</Wrapper>
	)
}

export default NewProject;