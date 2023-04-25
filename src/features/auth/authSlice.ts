import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Credentials } from "../../utils/types";


const initialState: Credentials = {
	user: null,
	accessToken: null,
	id: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials(state, action: PayloadAction<Credentials>) {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			state.id = action.payload.id;
		},
		logOut(state) {
			state.user = null;
			state.accessToken = null;
			state.id = null;
		}
	}
})

export const getAuthUser = (state: RootState) => state.auth.user;
export const getAccessToken = (state: RootState) => state.auth.accessToken;
export const getId = (state: RootState) => state.auth.id;

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;