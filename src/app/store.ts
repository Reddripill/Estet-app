import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import housesReducer from "../features/housesSlice";
import connectReducer from "../features/connectSlice";

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
	reducer: {
		houses: housesReducer,
		connect: connectReducer,
	},
})



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;