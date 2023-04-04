import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConnectInitState {
	name: string;
	email: string;
	phoneNumber: string;
	interest?: string;
	message?: string;
}

const initialState: ConnectInitState[] = [];

export const connectSlice = createSlice({
	name: 'connect',
	initialState,
	reducers: {
		createConnect: (state, action: PayloadAction<ConnectInitState>) => {
			state.push(action.payload)
		}
	},
})

export const { createConnect } = connectSlice.actions;

export default connectSlice.reducer;