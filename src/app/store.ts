import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import housesReducer from "../features/housesSlice";
import connectReducer from "../features/connectSlice";



const store = configureStore({
	reducer: {
		houses: housesReducer,
		connect: connectReducer,
	},
	middleware: getDefaultMiddleware().concat(logger)
})



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;