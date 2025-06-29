import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: true,
        currentLang: "fi",
        isModal:false,
        isPicModal:false,
        picModalCurrentPic:null,
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
            state.isPicModal = !state.isPicModal;
        },
        setIsPicModal(state, action){
            state.isPicModal = action.payload;
        },
        setPicModal(state, action){
            state.picModalCurrentPic = action.payload;
        },
    }
})

export const {
    setIsLoading,
    setCurrentLang,
    toggleIsModal,
    togglePicModal,
    setIsPicModal,
    setPicModal,
} = appSlice.actions;

export default appSlice.reducer;