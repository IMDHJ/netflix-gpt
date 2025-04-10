import { createSlice } from "@reduxjs/toolkit";


const gpsSlice = createSlice({
    name: "gpt",
    initialState:{
        showGPTSearch : false
    },
    reducers:{
        toggleGPTSearchView : (state) => {
            state.showGPTSearch = !state.showGPTSearch
        }
    }
})
export const {toggleGPTSearchView} = gpsSlice.actions
export default gpsSlice.reducer;