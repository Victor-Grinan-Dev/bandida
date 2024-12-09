import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: true,
        currentLang: "en",
        isModal:false,
    },
    reducers: {
        setIsLoading(state, action){
            state.isLoading = action.payload;    
        },
        setCurrentLang(state, action){
            state.currentLang = action.payload;        
        },
        toggleIsModal(state){
            state.isModal = !state.isModal;
        }
    }
})

export const {
    setIsLoading,
    setCurrentLang,
    toggleIsModal,
} = appSlice.actions;

export default appSlice.reducer;