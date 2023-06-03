import { ChangeUserCredentials, UserCredentials } from "../../utils/types";
import { apiSlice } from "./apiSlice";


const userApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		getUser: builder.query<UserCredentials, string>({
			query: (id) => `user/${id}`,
			providesTags: ['User']
		}),
		changeUser: builder.mutation<UserCredentials, ChangeUserCredentials>({
			query: (patch) => ({
				url: 'user/change',
				method: 'POST',
				body: patch,
			}),
			invalidatesTags: ['User'],
		}),
		deleteUser: builder.mutation<UserCredentials, void>({
			query: () => ({
				url: 'user/delete',
				method: 'DELETE'
			})
		})
	})
})

export const {
	useGetUserQuery,
	useChangeUserMutation,
	useDeleteUserMutation,
} = userApiSlice