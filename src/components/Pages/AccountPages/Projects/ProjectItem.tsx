import React from 'react'
import styled from 'styled-components'
import { ProductTypeWithDate } from '../../../../utils/types';

interface IProps {
	project: ProductTypeWithDate;
	itemIndex: number;
}

type WrapperType = {
	index: number;
}

const Wrapper = styled.li<WrapperType>`
	display: flex;
	align-items: center;
	height: 48px;
	background-color: ${props => props.index % 2 === 0 ? '#161616' : '#0E0E0E'};
	justify-content: space-between;
	padding: 0 16px;
`
const ProjectInformation = styled.div`
	display: flex;
	align-items: center;
	flex: 0 0 1200px;
`
const MainFeature = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
`
const ProjectFeature = styled.div`
	flex: 1;
	padding-left: 16px;
`
const FakeAvatar = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 8px;
	background-color: #ffffff6a;
`
const Text = styled.div`
	font-family: 'Mulish';
	font-size: 14px;
	line-height: 20px;
	color: #FFFFFF;
`
const TextBlue = styled(Text)`
	color: #1DAEFF;
`
const ProjectActions = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`
const EditButton = styled.button`
	background: #0E0E0E;
	border: 1px solid #404040;
	border-radius: 33px;
	width: 80px;
	height: 32px;
	font-family: 'Mulish';
	font-style: normal;
	font-weight: 800;
	font-size: 10px;
	letter-spacing: 0.21em;
	text-transform: uppercase;
	color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Ellipsis = styled.div`
	height: 24px;
	width: 24px;
	position: relative;
	cursor: pointer;
	&::before,
	&::after {
		content: '';
	}
	&::before,
	&::after,
	span {
		position: absolute;
		left: 50%;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #5F5F5F;
		transform: translate(- 50%, 0)
	}
	span {
		top: 50%;
		transform: translate(0, -50%)
	}
	&::before {
		top: 3px;
	}
	&::after {
		bottom: 3px;
	}
`

const ProjectItem = ({ project, itemIndex }: IProps) => {
	const currency = project.currency.split(' ')[1];
	return (
		<Wrapper index={itemIndex}>
			<ProjectInformation>
				<ProjectFeature>
					<MainFeature>
						<FakeAvatar />
						<Text>{project.projectName}</Text>
					</MainFeature>
				</ProjectFeature>
				<ProjectFeature>
					<Text>{project.projectType}</Text>
				</ProjectFeature>
				<ProjectFeature>
					<Text>{project.square}</Text>
				</ProjectFeature>
				<ProjectFeature>
					<TextBlue>{project.price + ' ' + currency}</TextBlue>
				</ProjectFeature>
				<ProjectFeature>
					<Text>{project.creationDate}</Text>
				</ProjectFeature>
			</ProjectInformation>
			<ProjectActions>
				<EditButton type='button'>Edit</EditButton>
				<Ellipsis><span></span></Ellipsis>
			</ProjectActions>
		</Wrapper>
	)
}

export default ProjectItem