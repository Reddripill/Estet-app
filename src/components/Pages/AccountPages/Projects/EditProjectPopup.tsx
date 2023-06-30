import React, { useState, useRef } from 'react'
import Popup from '../../../UI/Popup'
import styled from 'styled-components';
import { ProductTypeWithDate } from '../../../../utils/types';
import { useInput } from '../../../../utils/hooks/useInput';
import Input from '../../../UI/Input';
import DropDown from '../../../UI/DropDown';
import ActionButton from '../../../UI/ActionButton';
import { BsCameraFill } from 'react-icons/bs'
import { useChangeProjectMutation } from '../../../../app/api/projectApiSlice';

interface IProps {
	clickHandler: () => void;
	project: ProductTypeWithDate;
}

export type ChangeProjectCredentials = {
	previewPhoto: string,
	projectName: string,
	projectType: string,
	project: ProductTypeWithDate,
}

const Content = styled.div`
	display: flex;
	gap: 40px;
	margin-bottom: 40px;
`
const ProjectPhoto = styled.div`
	flex: 0 0 auto;
	border-radius: 24px;
	overflow: hidden;
	width: 120px;
	cursor: pointer;
	position: relative;
	transition: all 0.3s ease 0s;
	&:hover {
		box-shadow: 0px 17px 33px 0px rgba(255, 255, 255, 0.20);
	}
`
const ProjectPhotoImage = styled.img`
	width: 120px;
	height: 100%;
	object-fit: cover;
	object-position: center;
`
const ProjectPhotoIcon = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
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
const ProjectFields = styled.div`
	flex: 1 0 auto;
	display: flex;
	flex-direction: column;
`
const Actions = styled.div`
	display: flex;
	gap: 16px;
`
const Action = styled.div`
	flex: 1;
`
const DeleteActionButton = styled(ActionButton)`
	color: #DD5E5E;
`
const InputFileElement = styled.input`
	display: none;
`


const EditProjectPopup = ({ clickHandler, project }: IProps) => {
	const [changeProject] = useChangeProjectMutation()
	const [previewImage, setPreviewImage] = useState<string>(project.previewPhoto)
	const projectName = useInput(project.projectName, ['emptyCheck']);
	const [currentPropertyType, setCurrentPropertyType] = useState<string>(project.projectType);
	const inputFileRef = useRef<HTMLInputElement>(null);
	const changePreviewPhoto = (inputPhoto: FileList | null) => {
		if (inputPhoto) {
			const image = inputPhoto[0];
			const reader = new FileReader();
			const imageType = image.type.split('/')[0];
			if (imageType === 'image') {
				reader.readAsDataURL(image)
			}
			reader.onload = () => {
				setPreviewImage(reader.result as string)
			}
			reader.onerror = () => {
				console.log(`Issue in FileReader with ${image.name}`);
			}
		}
	}
	const clickInputFileHandler = () => {
		if (inputFileRef.current) {
			inputFileRef.current.click()
		}
	}
	const saveHandler = () => {
		changeProject({
			previewPhoto: previewImage,
			projectName: projectName.value,
			projectType: currentPropertyType,
			project,
		})
	}
	return (
		<Popup
			title='Edit Project'
			clickHandler={clickHandler}
			isSmall={true}
			width={640}
		>
			<Content>
				<ProjectPhoto onClick={clickInputFileHandler}>
					<ProjectPhotoImage
						src={previewImage}
						alt='project photo'
					/>
					<ProjectPhotoIcon>
						<BsCameraFill
							style={{
								color: '#1DAEFF',
								fontSize: 32,
							}}
						/>
					</ProjectPhotoIcon>
					<InputFileElement
						type="file"
						ref={inputFileRef}
						onChange={e => changePreviewPhoto(e.target.files)}
					/>
				</ProjectPhoto>
				<ProjectFields>
					<SignInInput>
						<SignInInputLabel
							htmlFor='project-name'>name</SignInInputLabel>
						<Input
							inputEntity={projectName}
							name='project-name'
							autoComplete='off'
						/>
					</SignInInput>
					<SignInInput>
						<SignInInputLabel htmlFor='property-type'>property type</SignInInputLabel>
						<DropDown
							options={['House', 'Villa', 'Apartment']}
							currentOption={currentPropertyType}
							setCurrentOption={setCurrentPropertyType}
						/>
					</SignInInput>
				</ProjectFields>
			</Content>
			<Actions>
				<Action>
					<DeleteActionButton color='dark'>delete</DeleteActionButton>
				</Action>
				<Action>
					<ActionButton color='dark'>suspend</ActionButton>
				</Action>
				<Action>
					<ActionButton color='dark'>export</ActionButton>
				</Action>
				<Action>
					<ActionButton
						color='gradient'
						disabled={projectName.isError}
						clickHandler={saveHandler}
					>
						save
					</ActionButton>
				</Action>
			</Actions>
		</Popup>
	)
}

export default EditProjectPopup