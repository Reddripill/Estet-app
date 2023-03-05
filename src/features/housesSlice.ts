import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HouseCard } from "../utils/types";

interface HousesState {
	entities: HouseCard[];
	filteredHouses: HouseCard[];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: null | string
}

const initialState: HousesState = {
	entities: [],
	filteredHouses: [],
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
		addFilteredHouses(state, action: PayloadAction<HouseCard[]>) {
			state.filteredHouses = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.entities = state.entities.concat(action.payload);
				state.loading = 'succeeded';
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message as string;
			})
	},
});

export const { addFilteredHouses } = housesSlice.actions;

export default housesSlice.reducer;