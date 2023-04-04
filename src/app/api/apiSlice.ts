import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HouseCard } from '../../utils/types';
import { RootState } from '../store';


const basedQuery = fetchBaseQuery({
	baseUrl: 'localhost:4444/',
	prepareHeaders(headers, api) {
		const token = (api.getState() as RootState).auth.token;
		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}
		return headers;
	}
})


export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'localhost:4444/',
	}),
	endpoints: builder => ({
		getHouses: builder.query<HouseCard[], void>({
			query: () => 'database.json'
		}),
	}),
})

export const { useGetHousesQuery } = apiSlice;