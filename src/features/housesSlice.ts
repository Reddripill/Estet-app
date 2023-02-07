import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HouseCard } from "../utils/types";

interface HousesState {
	entities: HouseCard[];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: null | string
}

const initialState: HousesState = {
	entities: [],
	loading: 'idle',
	error: null,
}

export const fetchProducts = createAsyncThunk(
	'houses/fetchProducts',
	async () => {
		const response = await (await (fetch('/database.json'))).json();
		return response;
	}
)

export const housesSlice = createSlice({
	name: 'houses',
	initialState,
	reducers: {

	},
	extraReducers(builder) {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.loading = 'pending';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.entities = action.payload;
				state.loading = 'succeeded';
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message as string;
			})
	},
});


export default housesSlice.reducer;