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
		})
	})
})

export const {
	useCreateProjectMutation,
	useGetProjectsQuery,
} = projectApiSlice