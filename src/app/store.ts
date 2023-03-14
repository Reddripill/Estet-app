import { configureStore } from "@reduxjs/toolkit";
import housesReducer from "../features/housesSlice";


const store = configureStore({
	reducer: {
		houses: housesReducer
	},
})



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;