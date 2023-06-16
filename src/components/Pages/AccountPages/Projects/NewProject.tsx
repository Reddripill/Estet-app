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
import { useImmer } from 'use-immer'
import ProjectCredentials from './ProjectCredentials'
import CreatorCredentials from './CreatorCredentials'
import AdditionSection from './AdditionSection';
import { RxImage } from 'react-icons/rx'



export type AddedUserType = {
	firstname: string;
	lastname: string;
	phone: string;
	email: string;
}

interface IProjectProperties {
	address?: string;
	price?: string;
	neighbourhood?: string;
	creators?: AddedUserType[];
	checkboxes?: {
		isExplor?: boolean;
		isAccept?: boolean;
	}
	currency?: string;
	bedrooms?: number;
	bathrooms?: number;
	year?: number;
	floors?: number;
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
`


const NewProject = () => {
	const id = useAppSelector(getId);
	const { isLoading } = useGetUserQuery(id as string);
	const [isExplore, setIsExplore] = useState<boolean>(false);
	const [isAccept, setIsAccept] = useState<boolean>(false);
	const navigate = useNavigate();

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
						<ProjectCredentials />
						<CryptoSection>
							<Checkbox setState={setIsExplore}>I want explore selling as an NFT</Checkbox>
							<Checkbox setState={setIsAccept}>I’ll also accept cryptocurrencies</Checkbox>
						</CryptoSection>
						<CreatorCredentials />
						<AdditionSection />
					</MainContent>
					<AddImageSection>
						<AddImageBlock>
							<RxImage style={{ fontSize: 60 }} />
							<ActionButton color='blue'>Upload Poster</ActionButton>
						</AddImageBlock>
					</AddImageSection>
				</Content>
			</AccountContainer>
		</Wrapper>
	)
}

export default NewProject;