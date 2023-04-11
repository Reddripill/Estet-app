import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Credentials } from "../../utils/types";


const initialState: Credentials = {
	user: null,
	token: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials(state, action: PayloadAction<Credentials>) {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		logOut(state) {
			state.user = null;
			state.token = null;
		}
	}
})

export const getAuthUser = (state: RootState) => state.auth.user;
export const getAccessToken = (state: RootState) => state.auth.token;

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;