import React from 'react'
import styled from 'styled-components';
import { Container } from '../../../utils/styles';
import { HouseCard } from '../../../utils/types';
import PhotoGallery from './PhotoGallery';

interface Props {
	user: HouseCard;
}

const Wrapper = styled.div`
`

const SingleHouseContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	gap: 50px;
`
const InformationContent = styled.div`
	flex: 1 1 auto;
`

const MainSingleSection = ({ user }: Props) => {
	return (
		<Wrapper>
			<SingleHouseContainer>
				<InformationContent>
					<PhotoGallery images={user.url} />
				</InformationContent>
			</SingleHouseContainer>
		</Wrapper>
	)
}

export default MainSingleSection;