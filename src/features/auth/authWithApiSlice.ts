import { apiSlice } from "../../app/api/apiSlice";
import { Auth, UserCredentials } from "../../utils/types";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		registerUser: builder.mutation<Auth, UserCredentials>({
			query: (patch) => ({
				url: 'auth/signup',
				method: 'POST',
				body: patch
			})
		})
	})
})

export const {
	useRegisterUserMutation,
} = authApiSlice