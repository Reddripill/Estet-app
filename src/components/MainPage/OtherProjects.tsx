import React from 'react'
import styled from 'styled-components';
import { Title, Text } from '../../utils/styles';
import { Sections } from '../../utils/types';

interface IProps {
	id: Sections
}

const Wrapper = styled.section`
	
`
const SectionInformation = styled.div`
	text-align: center;
`

const OtherProjects = ({ id }: IProps) => {
	return (
		<Wrapper id={id}>
			<SectionInformation>
				<Title>Other Projects</Title>
				<Text>Other projects by us in different locations</Text>
			</SectionInformation>
		</Wrapper>
	)
}

export default OtherProjects