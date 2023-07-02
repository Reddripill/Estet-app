import React, { useState, useEffect } from 'react'
import Popup from '../../../UI/Popup'
import styled from 'styled-components'
import ActionButton from '../../../UI/ActionButton'
import Checkbox from '../../../UI/Checkbox'
import { MainText } from '../../../../utils/styles'
import { useDeleteProjectMutation } from '../../../../app/api/projectApiSlice'
import { ProductTypeWithDate } from '../../../../utils/types'
import { useAppSelector } from '../../../../app/hooks'
import { getAuthUser } from '../../../../features/auth/authSlice'

interface IProps {
	setState: (value: boolean) => void;
	project: ProductTypeWithDate;
}

type UserType = {
	firstname: string;
	lastname: string;
}

const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	justify-content: flex-end;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

const DeleteProjectPopup = ({ setState, project }: IProps) => {
	const user = useAppSelector(getAuthUser) as UserType;
	const [isConfirm, setIsConfirm] = useState<boolean>(false)
	const [deleteUser] = useDeleteProjectMutation()
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}
	return (
		<Popup
			title='Delete Project'
			clickHandler={() => setState(false)}
			isSmall={true}
		>
			<Form onSubmit={e => submitHandler(e)}>
				<MainText>You want to delete project “{project.projectName}” by {user.firstname + ' ' + user.lastname}. This action can not be undone.</MainText>
				<Checkbox setState={setIsConfirm}>Confirm project deletion</Checkbox>
			</Form>
			<Actions>
				<ActionButton disabled={!isConfirm} color='red' clickHandler={() => deleteUser(project)}>
					Delete Project
				</ActionButton>
				<ActionButton color='dark' clickHandler={() => setState(false)}>
					Cancel
				</ActionButton>
			</Actions>
		</Popup>
	)
}

export default DeleteProjectPopup