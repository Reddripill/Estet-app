import { createAsyncThunk, createSlice, PayloadAction, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { HouseCard } from "../../utils/types";


interface HousesState {
	filteredHouses: HouseCard[];
	loading: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: null | string
}

const houseAdapter = createEntityAdapter<HouseCard>();

const initialState = houseAdapter.getInitialState<HousesState>({
	filteredHouses: [],
	loading: 'idle',
	error: null,
})

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
				houseAdapter.addMany(state, action.payload)
				state.loading = 'succeeded';
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message as string;
			})
	},
});

export const {
	selectAll: selectAllHouse,
	selectById: selectHouseById,
	selectIds: selectAllHouseIds,
} = houseAdapter.getSelectors<RootState>(state => state.houses)

export const { addFilteredHouses } = housesSlice.actions;

export default housesSlice.reducer;