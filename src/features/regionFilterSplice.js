import { createSlice} from "@reduxjs/toolkit";
const initialState = {
   currentRegionData:[],
   currentRegionContainerHeader:"Filter by Region"
}

const regionFilterSplice = createSlice({
    name: "countriesRegionFilter",
    initialState,
    reducers: {
        setCurrentRegionData: (state,{payload}) => {
            state.currentRegionData=payload
        },
        setCurrentRegionContainerHeader: (state,{payload}) => {
            if (payload === "All") {
                state.currentRegionContainerHeader="Filter by Region"
            }
            state.currentRegionContainerHeader=payload
        }
    }
})

export const { setCurrentRegionData,setCurrentRegionContainerHeader}= regionFilterSplice.actions

export default regionFilterSplice.reducer
