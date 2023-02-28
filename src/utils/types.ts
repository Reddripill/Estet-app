export type HouseCard = {
	id: string,
	price: number,
	type: string,
	bath: number,
	square: number,
	owner: string,
	url: string,
	productType: string,
	service: string,
	location: string,
}

export type HouseFilter = {
	service: string;
	location: string | null;
	productType: string;
	priceCurrency: string;
	priceRange: number[];
	type: string;
}

export type CategoryType = 'all' | '1 rooms' | '2 rooms' | 'studio';