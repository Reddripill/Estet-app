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
	garage: number;
	grid: number;
	bed: number;
	date: number;
	description: string;
	pros: string[];
	video: string;
}

export type UserCredentials = {
	firstname: string,
	lastname: string,
	email: string,
	password: string,
	phoneNumber: string,
	country: string,
	refreshToken?: string;
}

export type UserCredentialsWithId = UserCredentials & { _id: string }

export type HouseFilter = {
	service: string;
	location: string | null;
	productType: string;
	priceRange: number[];
	type: string;
}

export type InputValidation = {
	value: string,
	onChangeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
	onBlurHandler: () => void,
	isClear: boolean,
	isError: boolean,
	sendData: () => void,
	errors: boolean;
}

export type CategoryType = 'all' | '1 rooms' | '2 rooms' | 'studio';

export type Sections = 'home' | 'aboutUs' | 'otherProjects';

export type Currency = 'Dol' | 'Eu';

export type FCWidthChildren<T> = FC<PropsWithChildren<T>>

export type Credentials = {
	user: {
		firstname: string,
		lastname: string,
	} | null;
	token: string | null;
}

export type Auth = {
	accessToken: string;
}