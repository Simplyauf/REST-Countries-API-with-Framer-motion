import { configureStore } from "@reduxjs/toolkit";
import FetchCountryDataReducer from "./features/fetchCountryApiSlice";
import regionFilterReducer from "./features/regionFilterSplice";

export const store = configureStore({
	reducer: {
		fetchCountriesData: FetchCountryDataReducer,
		regionFilterInfo:regionFilterReducer
	},
});
