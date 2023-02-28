import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { HouseCard, HouseFilter } from '../types';


export default function useFiltering({
	service,
	location,
	productType,
	priceCurrency,
	priceRange,
	type,
}: HouseFilter) {
	const houses = useAppSelector(state => state.houses.entities);
	const [housesCount, setHousesCount] = useState<number>(0);
	const [filteredHouses, setFilteredHouses] = useState<HouseCard[] | undefined>();
	useEffect(() => {
		const exactHouses = houses.filter(house => {
			if (
				house.service.toLocaleLowerCase() === service.toLocaleLowerCase()
				&& house.productType.toLocaleLowerCase() === productType.toLocaleLowerCase()
				&& house.type.toLocaleLowerCase() === type.toLocaleLowerCase()
			) {
				return true;
			}
			return false;
		})
		setHousesCount(exactHouses.length);
		setFilteredHouses(exactHouses)
	}, [
		service,
		productType,
		type,
		houses,
	])
	return {
		housesCount,
		filteredHouses,
		priceCurrency,
	}
}