import { createSlice } from "@reduxjs/toolkit";

const initialState = { lang : "kurdish"};

const languageSlice = createSlice({
    name : "language",
    initialState,
    reducers : {
        english : (state)=>{
            state.lang = "english" // state.count = state.count + 1
        },
        kurdish : (state)=>{
            state.lang = "kurdish" // state.count = state.count - 1
        }

    }
})

export const {english, kurdish} = languageSlice.actions;
export default languageSlice.reducer;