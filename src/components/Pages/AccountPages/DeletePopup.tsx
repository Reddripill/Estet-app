import React, { useState, useEffect } from 'react'
import Popup from '../../UI/Popup'
import styled from 'styled-components'
import { MainText } from '../../../utils/styles'
import ActionButton from '../../UI/ActionButton'
import Checkbox from '../../UI/Checkbox'
import { useNavigate } from 'react-router-dom'
import { useDeleteUserMutation } from '../../../app/api/userApiSlice'

interface IProps {
	setState: (value: boolean) => void;
}

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Title = styled.div`
	font-family: 'Mulish';
	font-weight: 700;
	font-size: 36px;
	line-height: 40px;
	color: #FFFFFF;
`
const Cross = styled.div`
	height: 24px;
	width: 24px;
	cursor: pointer;
	position: relative;
	&::before,
	&::after {
		content:'';
		position: absolute;
		top: 50%;
		left: 50%;
		height: 1px;
		width: 24px;
		background-color: #fff;
	}
	&::before {
		transform: translate(-50%) rotate(-45deg)
	}
	&::after {
		transform: translate(-50%) rotate(45deg)
	}
`
const Actions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

const DeletePopup = ({ setState }: IProps) => {
	const [isConfirm, setIsConfirm] = useState<boolean>(false)
	const navigate = useNavigate()
	const [deleteUser, { isSuccess: isDeleteSuccess }] = useDeleteUserMutation()
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}
	useEffect(() => {
		if (isDeleteSuccess) {
			navigate('/')
		}
	}, [isDeleteSuccess, navigate])
	return (
		<Popup
			title='Delete Account'
			clickHandler={() => setState(false)}
			isSmall={true}
		>
			<Form onSubmit={e => submitHandler(e)}>
				<MainText>This action can not be undone. We highly recommend to export your account.</MainText>
				<Checkbox setState={setIsConfirm}>Confirm account deletion</Checkbox>
			</Form>
			<Actions>
				<ActionButton disabled={!isConfirm} color='red' clickHandler={deleteUser}>
					Delete Account
				</ActionButton>
				<ActionButton color='dark' clickHandler={() => setState(false)}>
					Cancel
				</ActionButton>
			</Actions>
		</Popup>
	)
}

export default DeletePopup