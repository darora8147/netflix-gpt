import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        handleGptSearchToggleView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export const { handleGptSearchToggleView } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;