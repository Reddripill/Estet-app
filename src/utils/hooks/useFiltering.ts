import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { HouseCard, HouseFilter } from '../types';


export default function useFiltering({
	service,
	location,
	productType,
	priceRange,
	type,
}: HouseFilter) {
	const houses = useAppSelector(state => state.houses.entities);
	const [housesCount, setHousesCount] = useState<number>(0);
	const [filteredHouses, setFilteredHouses] = useState<HouseCard[] | undefined>();
	useEffect(() => {
		const exactHouses = houses.filter(house => {
			if (
				(!location || house.location === location)
				&& house.service.toLocaleLowerCase() === service.toLocaleLowerCase()
				&& house.productType.toLocaleLowerCase() === productType.toLocaleLowerCase()
				&& house.type.toLocaleLowerCase() === type.toLocaleLowerCase()
				&& +house.price >= priceRange[0] && +house.price <= priceRange[1]
			) {
				return true;
			}
			return false;
		})
		setHousesCount(exactHouses.length);
		setFilteredHouses(exactHouses);
	}, [
		service,
		productType,
		location,
		priceRange,
		type,
		houses,
	])
	return {
		housesCount,
		filteredHouses,
	}
}