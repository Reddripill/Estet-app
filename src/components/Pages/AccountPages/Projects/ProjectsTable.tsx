import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AccountContainer } from '../../../../utils/styles'
import ProjectItem from './ProjectItem';
import { useAppSelector } from '../../../../app/hooks';
import { getId } from '../../../../features/auth/authSlice';
import { useGetProjectsQuery } from '../../../../app/api/projectApiSlice';
import Spinner from '../../../UI/Spinner';
import { useOutletContext } from 'react-router-dom';
import { ProjectsFiltersType } from '../MainAccountPage';
import { ProductTypeWithDate } from '../../../../utils/types';
import useProjectsFiltering from '../../../../utils/hooks/useProjectsFiltering';

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

const array: (keyof ProductTypeWithDate)[] = ['projectName', 'projectType', 'square', 'price', 'creationDate']

const ProjectsTable = () => {
	const projectsFilters = useOutletContext<ProjectsFiltersType>();
	const id = useAppSelector(getId);
	const { data: currentProjects, isFetching } = useGetProjectsQuery(id as string);
	const filteredProjects = useProjectsFiltering(
		projectsFilters,
		array,
		currentProjects
	)
	return (
		<Wrapper>
			{isFetching ?
				<Spinner /> :
				<>
					{filteredProjects.length !== 0 &&
						<ProjectsContainer>
							<ColumnTitles>
								<ColumnTitle>name</ColumnTitle>
								<ColumnTitle>type</ColumnTitle>
								<ColumnTitle>size</ColumnTitle>
								<ColumnTitle>price</ColumnTitle>
								<ColumnTitle>creation data</ColumnTitle>
							</ColumnTitles>
							<ProjectsField>
								{filteredProjects.slice().reverse().map((item, index) => (
									<ProjectItem
										key={item.projectName}
										project={item}
										itemIndex={index}
									/>
								))}
							</ProjectsField>
						</ProjectsContainer>
					}
				</>
			}
		</Wrapper>
	)
}

export default ProjectsTable