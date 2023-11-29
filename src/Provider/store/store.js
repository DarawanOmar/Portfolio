import { configureStore } from "@reduxjs/toolkit";
import languageSlice from '../slice/langSlice'

export const store = configureStore({
    reducer : {
        languageReducer : languageSlice
    }
})