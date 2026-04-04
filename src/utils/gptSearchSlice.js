import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        moviesName: null,
        moviesResult: null
    },
    reducers: {
        handleGptSearchToggleView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResult: (state, action) => {
            const { moviesName, moviesResult } = action.payload;
            state.moviesName = moviesName;
            state.moviesResult = moviesResult;
        },
        clearGptMoviesResult: (state) => {
           state.moviesName = null;
           state.moviesResult = null;
        }
    }
});

export const { handleGptSearchToggleView, addGptMoviesResult, clearGptMoviesResult} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;