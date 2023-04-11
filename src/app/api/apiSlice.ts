import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Credentials, UserCredentialsWithId } from '../../utils/types';
import { RootState } from '../store';
import { setCredentials } from '../../features/auth/authSlice';


const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:4444/',
	prepareHeaders(headers, api) {
		const token = (api.getState() as RootState).auth.token;
		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}
		return headers;
	}
})

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result?.error?.status === 403) {
		const refresh = await baseQuery('/refresh', api, extraOptions);
		if (refresh.data) {
			const user = (api.getState() as RootState).auth.user;
			api.dispatch(setCredentials({ ...refresh.data, user } as Credentials))
			result = await baseQuery(args, api, extraOptions);
		}
	}
	return result;
}


export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({
		getAllUsers: builder.query<UserCredentialsWithId[], void>({
			query: () => '/allUsers',
		})
	}),
})

export const {
	useGetAllUsersQuery,
} = apiSlice