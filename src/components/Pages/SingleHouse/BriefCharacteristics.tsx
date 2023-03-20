import React from 'react';
import styled from 'styled-components';
import { HouseCard } from '../../../utils/types';
import { IoBed } from 'react-icons/io5';
import { GiShower } from 'react-icons/gi';
import { MdOutlineGrid3X3 } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';
import { BsCalendar } from 'react-icons/bs';
import { BiShapeSquare } from 'react-icons/bi';


interface Props {
	user: HouseCard;
}

const CharacteristicsRow = styled.div`
	display: flex;
	align-items: center;
	margin-top: 45px;
	border: 1px solid rgba(255, 251, 251, 0.35);
	border-radius: 8px;
	height: 60px;
`
const CharacteristicItem = styled.div`
	height: 100%;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	border-right: 1px solid rgba(255, 251, 251, 0.35);
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 17px;
	line-height: 21px;
	letter-spacing: -0.427179px;
	color: #FFFFFF;
	&:last-child {
		border-right: none;
	}
`

const BriefCharacteristics = ({ user }: Props) => {
	return (
		<CharacteristicsRow>
			<CharacteristicItem>
				<IoBed />
				{user.bed}
			</CharacteristicItem>
			<CharacteristicItem>
				<GiShower />
				{user.bath}
			</CharacteristicItem>
			<CharacteristicItem>
				<MdOutlineGrid3X3 />
				{user.grid}
			</CharacteristicItem>
			<CharacteristicItem>
				<GiHomeGarage />
				{user.garage}
			</CharacteristicItem>
			<CharacteristicItem>
				<BsCalendar />
				{user.date}
			</CharacteristicItem>
			<CharacteristicItem>
				<BiShapeSquare />
				{user.square}
			</CharacteristicItem>
		</CharacteristicsRow>
	)
}

export default BriefCharacteristics