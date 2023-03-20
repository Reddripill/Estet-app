import { FC, PropsWithChildren } from "react";

export type HouseCard = {
	id: string,
	price: string,
	type: string,
	bath: number,
	square: number,
	user: {
		fullname: string,
		photo: string,
	},
	url: string[],
	productType: string,
	service: string,
	location: string,
}

export type HouseFilter = {
	service: string;
	location: string | null;
	productType: string;
	priceRange: number[];
	type: string;
}

export type CategoryType = 'all' | '1 rooms' | '2 rooms' | 'studio';

export type Sections = 'home' | 'aboutUs' | 'otherProjects';

export type Currency = 'Dol' | 'Eu';

export type FCWidthChildren<T> = FC<PropsWithChildren<T>>