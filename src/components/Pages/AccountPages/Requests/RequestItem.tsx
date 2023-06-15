import React from 'react'
import { IRequestItem } from './RequestsTable'
import styled from 'styled-components'

interface IProps {
	request: IRequestItem;
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
const ProjectFeature = styled.div`
	flex: 0 0 140px;
	padding-left: 16px;
`
const ProjectFeatureText = styled(ProjectFeature)`
	flex: 1;
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
	width: 100px;
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
const LabelNew = styled.div`
	text-transform: uppercase;
	font-family: 'Mulish';
	font-weight: 800;
	font-size: 9px;
	line-height: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	letter-spacing: 0.1em;
	color: #FFFFFF;
	width: 40px;
	height: 20px;
	background: linear-gradient(90deg, #FEAC6D 0%, #AE61ED 100%);
	border-radius: 10px;
`

const RequestItem = ({ request, itemIndex }: IProps) => {
	return (
		<Wrapper index={itemIndex}>
			<ProjectInformation>
				<ProjectFeature>
					<Text>{request.name}</Text>
				</ProjectFeature>
				<ProjectFeature>
					<Text>{request.type}</Text>
				</ProjectFeature>
				<ProjectFeature>
					{request.status === 'inProgress' ?
						<Text>In Progress</Text> :
						request.status === 'new' ?
							<LabelNew>{request.status}</LabelNew> :
							<Text>{request.status}</Text>
					}
				</ProjectFeature>
				<ProjectFeatureText>
					<Text>{request.text}</Text>
				</ProjectFeatureText>
				<ProjectFeature>
					<Text>{request.data}</Text>
				</ProjectFeature>
				<ProjectFeature>
					<TextBlue>{request.user}</TextBlue>
				</ProjectFeature>
			</ProjectInformation>
			<ProjectActions>
				<EditButton type='button'>Answer</EditButton>
				<Ellipsis><span></span></Ellipsis>
			</ProjectActions>
		</Wrapper>
	)
}

export default RequestItem