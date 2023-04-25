import { UserCredentials } from "../../utils/types";
import { apiSlice } from "./apiSlice";


const userApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getUser: builder.query<UserCredentials, string>({
			query: (id) => `user/${id}`
		})
	})
})

export const {
	useGetUserQuery,
} = userApiSlice