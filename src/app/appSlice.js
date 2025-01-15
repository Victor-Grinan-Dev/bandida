import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: true,
        currentLang: "en",
        isModal:false,

        isPicModal:false,
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
        },
        togglePicModal(state){
            state.picModal = !state.picModal;
        },
    }
})

export const {
    setIsLoading,
    setCurrentLang,
    toggleIsModal,
    togglePicModal,
} = appSlice.actions;

export default appSlice.reducer;