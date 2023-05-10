import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import housesReducer from "../features/houses/housesSlice";
import connectReducer from "../features/connect/connectSlice";
import messagesReducer from "../features/message/messagesSlice";
import authReducer from "../features/auth/authSlice";
import { apiSlice } from "./api/apiSlice";



const store = configureStore({
	reducer: {
		houses: housesReducer,
		connect: connectReducer,
		messages: messagesReducer,
		auth: authReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getDefaultMiddleware => (
		getDefaultMiddleware().concat(apiSlice.middleware)
	),
	devTools: true,
})



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;