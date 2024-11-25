import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: true,
        currentLang: "en",
    },
    reducers: {
        setIsLoading(state, action){
            state.isLoading = action.payload;    
        },
        setCurrentLang(state, action){
            state.currentLang = action.payload;        
        },
    }
})

export const {
    setIsLoading,
    setCurrentLang,
} = appSlice.actions;

export default appSlice.reducer;