import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {value: initialStateValue},
    reducer: {
        changeColor: (state, action) =>{
            state.value = action.payload;
        },
    },
});

export const { changeColor } = themeSlice.action;
export default themeSlice.reducer;