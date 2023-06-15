import React from 'react'
import styled from 'styled-components';
import { AccountContainer } from '../../../../utils/styles';
import RequestItem from './RequestItem';


export interface IRequestItem {
	name: string;
	type: string;
	status: 'new' | 'inProgress' | 'closed';
	text: string;
	data: string;
	user: string;
	id: number;
}

const Wrapper = styled.div`
	margin-top: 40px;
`
const ProjectsContainer = styled(AccountContainer)`
`
const ColumnTitles = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-left: 32px;
	width: 1200px;
`
const ColumnTitle = styled.div`
	font-family: 'Mulish';
	font-weight: 800;
	font-size: 9px;
	line-height: 20px;
	letter-spacing: 0.21em;
	text-transform: uppercase;
	color: #5F5F5F;
	flex: 0 0 140px;
`
const ColumnTitleText = styled(ColumnTitle)`
	flex: 1;
`
const ProjectsField = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 16px;
	border-radius: 8px;
	overflow: hidden;
`

const test: IRequestItem[] = [
	{
		name: 'Malto House',
		type: 'Apartment',
		status: 'new',
		text: 'It’s good apartment',
		data: '3/28/2022',
		user: 'Rin Ellei',
		id: 1,
	},
	{
		name: 'Malto House',
		type: 'Town house',
		status: 'inProgress',
		text: 'You want town house ? I have town house for you',
		data: '3/28/2022',
		user: 'Rin Ellei',
		id: 2,
	},
	{
		name: 'Malto House',
		type: 'Apartment',
		status: 'new',
		text: 'It’s good apartment',
		data: '3/28/2022',
		user: 'Rin Ellei',
		id: 3,
	},
	{
		name: 'Malto House',
		type: 'Apartment',
		status: 'closed',
		text: 'You want town house ? I have town house for you',
		data: '3/28/2022',
		user: 'Rin Ellei',
		id: 4,
	},
]


const RequestsTable = () => {
	return (
		<Wrapper>
			<ProjectsContainer>
				<ColumnTitles>
					<ColumnTitle>name</ColumnTitle>
					<ColumnTitle>type</ColumnTitle>
					<ColumnTitle>status</ColumnTitle>
					<ColumnTitleText>text</ColumnTitleText>
					<ColumnTitle>data</ColumnTitle>
					<ColumnTitle>user</ColumnTitle>
				</ColumnTitles>
				<ProjectsField>
					{test.map((item, index) => (
						<RequestItem
							key={item.id}
							request={item}
							itemIndex={index}
						/>
					))}
				</ProjectsField>
			</ProjectsContainer>
		</Wrapper>
	)
}

export default RequestsTable