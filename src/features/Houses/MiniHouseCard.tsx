import React from 'react'
import styled from 'styled-components';
import { HouseCard } from '../../utils/types';
import { IoBed } from 'react-icons/io5';
import { GiShower } from 'react-icons/gi';
import { MdOutlineGrid3X3 } from 'react-icons/md';

interface MiniHouseProps {
	house: HouseCard;
}

const MiniHouseCardBody = styled.div`
	width: 335px;
	border-radius: 8px;
	overflow: hidden;
`
const MiniHouseCardImage = styled.img`
	height: 265px;
`
const MiniHouseCardContent = styled.div`
	background-color: #161616;
	cursor: pointer;
`
const MiniHouseCardText = styled.div`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: -0.603077px;
	color: #FFFFFF;
	padding: 20px;
`
const DescriptionRow = styled.div`
	display: flex;
	align-items: center;
`
const DescriptionItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 20px 0;
	flex: 1 1 auto;
	border-top: 1px solid rgba(255, 251, 251, 0.35);
	&:not(:last-child) {
		border-right: 1px solid rgba(255, 251, 251, 0.35);
	}
`

const MiniHouseCard = ({ house }: MiniHouseProps) => {
	return (
		<MiniHouseCardBody>
			<MiniHouseCardImage
				src={house.url[0]}
				alt='Mini House'
			/>
			<MiniHouseCardContent>
				<MiniHouseCardText>Malto House</MiniHouseCardText>
				<DescriptionRow>
					<DescriptionItem>
						<IoBed />
						{house.bed}
					</DescriptionItem>
					<DescriptionItem>
						<GiShower />
						{house.bath}
					</DescriptionItem>
					<DescriptionItem>
						<MdOutlineGrid3X3 />
						{house.grid}
					</DescriptionItem>
				</DescriptionRow>
			</MiniHouseCardContent>
		</MiniHouseCardBody>
	)
}

export default MiniHouseCard