import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IState {
	user: string | null;
	token: string | null;
}

const initialState: IState = {
	user: null,
	token: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials(state, action: PayloadAction<IState>) {
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