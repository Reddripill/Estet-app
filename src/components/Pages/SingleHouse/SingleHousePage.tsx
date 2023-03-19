import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { selectHouseById } from '../../../features/housesSlice';
import MainSingleSection from './MainSingleSection';

// interface IParams {
// 	houseId: string;
// }

const SingleHousePage = () => {
	// const { houseId }: { houseId: string } = useParams();
	// const house = useAppSelector((state) => selectHouseById(state, houseId))
	return (
		<>
			<MainSingleSection />
		</>
	)
}

export default SingleHousePage;