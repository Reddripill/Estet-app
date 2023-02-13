export type HouseCard = {
	id: string,
	price: string,
	type: string,
	bath: number,
	square: number,
	owner: string,
	url: string,
	productType: string,
	serice: string,
}

export type CategoryType = 'all' | '1 bedrooms' | '2 bedrooms' | 'studio';