import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import housesReducer from "../features/Houses/housesSlice";
import connectReducer from "../features/connectSlice";
import messagesReducer from "../features/messagesSlice";
import { apiSlice } from "./api/apiSlice";



const store = configureStore({
	reducer: {
		houses: housesReducer,
		connect: connectReducer,
		messages: messagesReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: getDefaultMiddleware => (
		getDefaultMiddleware().concat(apiSlice.middleware, logger)
	)
})



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;