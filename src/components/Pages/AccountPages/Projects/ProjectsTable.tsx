import React from 'react'
import styled from 'styled-components'
import { AccountContainer } from '../../../../utils/styles'
import ProjectItem from './ProjectItem';

export interface IProjectItem {
	name: string;
	type: string;
	size: number;
	price: string;
	creationData: string;
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

const test: IProjectItem[] = [
	{
		name: 'Malto House',
		type: 'Apartment',
		size: 20,
		price: '$12,0000',
		creationData: '2/16/2022',
		id: 1,
	},
	{
		name: 'Malto House',
		type: 'Apartment',
		size: 20,
		price: '$12,0000',
		creationData: '2/16/2022',
		id: 2,
	},
	{
		name: 'Malto House',
		type: 'Apartment',
		size: 20,
		price: '$12,0000',
		creationData: '2/16/2022',
		id: 3,
	},
	{
		name: 'Malto House',
		type: 'Apartment',
		size: 20,
		price: '$12,0000',
		creationData: '2/16/2022',
		id: 4,
	},
]

const ProjectsTable = () => {
	return (
		<Wrapper>
			<ProjectsContainer>
				<ColumnTitles>
					<ColumnTitle>name</ColumnTitle>
					<ColumnTitle>type</ColumnTitle>
					<ColumnTitle>size</ColumnTitle>
					<ColumnTitle>price</ColumnTitle>
					<ColumnTitle>creation data</ColumnTitle>
				</ColumnTitles>
				<ProjectsField>
					{test.map((item, index) => (
						<ProjectItem
							key={item.id}
							project={item}
							itemIndex={index}
						/>
					))}
				</ProjectsField>
			</ProjectsContainer>
		</Wrapper>
	)
}

export default ProjectsTable