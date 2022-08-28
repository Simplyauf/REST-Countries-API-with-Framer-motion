import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countriesData: [],
  isLoading: true,
  loadingOrErrorMessage: "Loading",
  countriesDataRequested: [],
  isSearchFound: true,
  countriesDataPerPage:[],
};

const url = "https://restcountries.com/v3.1/all";

export const getCountriesData = createAsyncThunk("countries/getCountriesData", async (_, thunkAPI) => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const FetchCountrySlice = createSlice({
  name: "fetchCountriesData",
  initialState,
  reducers: {
    setCountriesDataRequested: (state, { payload }) => {
      payload = payload ? payload : [];
      state.countriesDataRequested = payload;
    },
    setCountriesDataPerPage: (state, { payload }) => {
      payload = payload ? payload : [];
      state.countriesDataPerPage = payload;
    },
    setLoadingOrErrorMessage: (state, { payload }) => {
      state.loadingOrErrorMessage = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setIsSearchFound: (state, { payload }) => {
      state.isSearchFound = payload;
    },
  
  },
  extraReducers: {
    [getCountriesData.pending]: (state) => {
      state.isLoading = true;
      state.loadingOrErrorMessage = "Loading";
    },
    [getCountriesData.fulfilled]: (state, { payload }) => {
      // setting the objects to empty array before fetched data is received,instead of undefined, to prevent error in Array methods in the frontend
      payload = payload ? payload : [];
      state.isLoading = false;
      state.countriesData = payload;
    },
    [getCountriesData.rejected]: (state, action) => {
      state.isLoading = true;
      state.countriesData = [];
      state.loadingOrErrorMessage = action.payload;
    },
  },
});

export const {
  fetchCountriesData,
  setLoadingOrErrorMessage,
  setIsLoading,
  setIsSearchFound,
  setCountriesDataPerPage,
  setCountriesDataRequested
} = FetchCountrySlice.actions;

export default FetchCountrySlice.reducer;
