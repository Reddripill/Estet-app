import { ChangeProjectCredentials } from "../../components/Pages/AccountPages/Projects/EditProjectPopup";
import { ProductType, ProductTypeWithDate } from "../../utils/types";
import { apiSlice } from "./apiSlice";


const projectApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		createProject: builder.mutation<ProductType, ProductType>({
			query: (patch) => ({
				url: '/project/createProject',
				method: 'POST',
				body: patch
			}),
			invalidatesTags: ['Projects']
		}),
		getProjects: builder.query<ProductTypeWithDate[], string>({
			query: (id) => ({
				url: `/project/${id}`
			}),
			providesTags: ['Projects'],
		}),
		changeProject: builder.mutation<ProductType, ChangeProjectCredentials>({
			query: (patch) => ({
				url: '/project/changeProject',
				method: 'POST',
				body: patch
			}),
			invalidatesTags: ['Projects']
		}),
	})
})

export const {
	useCreateProjectMutation,
	useGetProjectsQuery,
	useChangeProjectMutation,
} = projectApiSlice