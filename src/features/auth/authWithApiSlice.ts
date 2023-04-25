import { apiSlice } from "../../app/api/apiSlice";
import { Auth, LoginUserCredentials, UserCredentials } from "../../utils/types";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		registerUser: builder.mutation<Auth, UserCredentials>({
			query: (patch) => ({
				url: 'auth/signup',
				method: 'POST',
				body: patch
			})
		}),
		login: builder.mutation<Auth, LoginUserCredentials>({
			query: (patch) => ({
				url: 'auth/login',
				method: 'POST',
				body: patch,
			})
		}),
		refresh: builder.query<Auth, void>({
			query: () => '/refresh'
		}),
		logout: builder.mutation<{ refreshToken: string }, void>({
			query: () => ({
				url: '/logout',
				method: 'DELETE',
			})
		})
	})
})

export const {
	useRegisterUserMutation,
	useLoginMutation,
	useLogoutMutation,
	useRefreshQuery,
} = authApiSlice