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
	const [linkPath, setLinkPath] = useState<string>();
	const [filteredHouses, setFilteredHouses] = useState<HouseCard[] | undefined>();
	useEffect(() => {
		const link = [`/${service}`, `${productType}`, `${priceRange.join(';')}`, `${type}`];
		const exactHouses = houses.filter(house => {
			if (
				(!location || house.location === location)
				&& house.service.toLocaleLowerCase() === service.toLocaleLowerCase()
				&& house.productType.toLocaleLowerCase() === productType.toLocaleLowerCase()
				&& house.type.toLocaleLowerCase() === type.toLocaleLowerCase()
				&& house.price >= priceRange[0] && house.price <= priceRange[1]
			) {
				return true;
			}
			return false;
		})
		if (location) {
			link.push(`${location}`);
		}

		setLinkPath(link.join('/'));
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
		priceCurrency,
		linkPath,
	}
}