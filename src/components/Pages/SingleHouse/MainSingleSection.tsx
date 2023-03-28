import React from 'react'
import styled from 'styled-components';
import { Container, SmallTitle } from '../../../utils/styles';
import { HouseCard } from '../../../utils/types';
import BriefCharacteristics from './BriefCharacteristics'
import HoodMap from './HoodMap';
import MessageForm from './MessageForm';
import PhotoGallery from './PhotoGallery';
import ProsList from './ProsList';
import SimilarHouses from './SimilarHouses';
import Video from './Video';

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
const Ownerinformation = styled.div`
	flex: 0 0 250px;
`
const Owner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 15px;
`
const OwnerPhoto = styled.div`
	height: 110px;
	width: 110px;
	img {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
`
const OwnerName = styled.div`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 20px;
	line-height: 139.52%;
	color: #FFFBFB;
`
const Description = styled.div`
	margin-top: 55px;
	margin-bottom: 50px;
`
const DescriptionTitle = styled(SmallTitle)`
	margin-bottom: 25px;
`
const DescriptionText = styled.div`
	font-family: 'Rubik';
	font-size: 15px;
	line-height: 30px;
	color: rgba(255, 251, 251, 0.65);
`

const MainSingleSection = ({ user }: Props) => {
	return (
		<Wrapper>
			<SingleHouseContainer>
				<InformationContent>
					<PhotoGallery images={user.url} />
					<BriefCharacteristics user={user} />
					<Description>
						<DescriptionTitle>Description</DescriptionTitle>
						<DescriptionText>{user.description}</DescriptionText>
					</Description>
					<ProsList prosList={user.pros} />
					<Video video={user.video} />
					<HoodMap />
				</InformationContent>
				<Ownerinformation>
					<Owner>
						<OwnerPhoto>
							<img src={user.user.photo} alt="Owner" />
						</OwnerPhoto>
						<OwnerName>{user.user.fullname}</OwnerName>
					</Owner>
					<MessageForm owner={user.user.fullname} />
				</Ownerinformation>
			</SingleHouseContainer>
			<SimilarHouses />
		</Wrapper>
	)
}

export default MainSingleSection;