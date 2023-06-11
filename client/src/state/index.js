import { createSlice } from "@reduxjs/toolkit";
import { bgColorValue } from '../theme.js';

const initialState = {
    mode : "dark",
    currentColor : "#ffd166",
    userId: "63701cc1f03239b7f700000e",
};

export const globalSlice = createSlice({
    name : "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark" : 'light';
        },
        setCurrentColor: (state, action) => {
            state.currentColor = action.payload;
            bgColorValue(state.currentColor);
        },
    }
})

export const { setMode , setCurrentColor } = globalSlice.actions;

export default globalSlice.reducer;