import { ProductType, ProductTypeWithId } from "../../utils/types";
import { apiSlice } from "./apiSlice";


const projectApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		createProject: builder.mutation<ProductTypeWithId, ProductType>({
			query: (patch) => ({
				url: '/createProject',
				method: 'POST',
				body: patch
			})
		}),
	})
})

export const {
	useCreateProjectMutation
} = projectApiSlice