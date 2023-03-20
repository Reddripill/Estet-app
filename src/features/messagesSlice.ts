import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface StateShape {
	id: string;
	name: string;
	email: string;
	message: string;
	owner: string;
}

const messageAdapter = createEntityAdapter<StateShape>();

const messagesSlice = createSlice({
	name: 'messages',
	initialState: messageAdapter.getInitialState(),
	reducers: {
		sendMessage: (state, action: PayloadAction<StateShape>) => {
			messageAdapter.addOne(state, action.payload);
		}
	}
})

export const {
	selectAll: selectAllMessages
} = messageAdapter.getSelectors<RootState>(state => state.messages);

export const { sendMessage } = messagesSlice.actions;

export default messagesSlice.reducer;