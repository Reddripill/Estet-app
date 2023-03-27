import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HouseCard } from '../utils/types';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/'
	}),
	endpoints: builder => ({
		getHouses: builder.query<HouseCard[], void>({
			query: () => 'database.json'
		})
	}),
})

export const { useGetHousesQuery } = apiSlice;