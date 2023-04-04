import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../../app/hooks';
import { selectHouseById } from '../../../features/houses/housesSlice';
import NotFoundPage from '../../UI/NotFoundPage';
import MainSingleSection from './MainSingleSection';

interface RouteParams {
	houseId: string;
}

const Wrappper = styled.div`
	margin-top: 205px;
`

const SingleHousePage = () => {
	const { houseId } = useParams<keyof RouteParams>() as RouteParams;
	const house = useAppSelector((state) => selectHouseById(state, houseId));
	return (
		<Wrappper>
			{house ?
				<MainSingleSection user={house} />
				:
				<NotFoundPage />
			}
		</Wrappper>
	)
}

export default SingleHousePage;