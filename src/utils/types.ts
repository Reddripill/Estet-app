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

export type AddedUserType = {
	firstname: string;
	lastname: string;
	phone: string;
	email: string;
}

export type ProductType = {
	status: string;
	projectName: string;
	userId: string;
	price: string;
	apartmentType?: string;
	service: string;
	bathrooms: number;
	images: string[];
	projectType: string;
	creator: AddedUserType;
	checkboxes: {
		isExplore: boolean;
		isAccept: boolean;
	},
	buildYear: number;
	country: string;
	neighbourhood: string;
	address: string;
	floors: number;
	square: number;
	bedrooms: number;
	currency: string;
	garage: number;
	description: string;
	pros?: string[];
	videoLinks?: string[];
	previewPhoto: string;
}

export type ProductTypeWithDate = ProductType & { creationDate: string }

// export type ProductTypeWithId = ProductTypeWithDate & { _id: string }

export type UserCredentials = {
	firstname: string,
	lastname: string,
	email: string,
	password: string,
	phoneNumber: string,
	country: string,
	avatar: string;
	refreshToken?: string;
}

export type ChangeUserCredentials = {
	firstname?: string;
	lastname?: string;
	email?: string;
	currentPassword?: string;
	confirmNewPassword?: string;
	newPassword?: string;
}

export type LoginUserCredentials = {
	email: string,
	password: string,
}

export type UserCredentialsWithId = UserCredentials & { id: string }

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

export type ProjectType = 'villa' | 'apartment' | 'house'

export type FCWidthChildren<T> = FC<PropsWithChildren<T>>

export type Credentials = {
	user: {
		firstname: string,
		lastname: string,
	} | null;
	accessToken: string | null;
	id: string | null;
}

export type Auth = {
	accessToken: string;
	user: {
		firstname: string,
		lastname: string,
	};
	id: string;
}

export type ButtonColorObjectType = {
	dark: string;
	gradient: string;
	blue: string;
	red: string;
};

export type ButtonColorType = keyof ButtonColorObjectType;