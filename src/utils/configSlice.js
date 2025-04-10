import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
    name:"config",
    initialState:{
        languagePreference : "en",
        theme : "light"
    },
    reducers:{
        changeLanguagePreference:(state, action) => {
            state.languagePreference = action.payload
        },
        changeAppTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const{changeLanguagePreference, changeAppTheme} = configSlice.actions;
export default configSlice.reducer;
