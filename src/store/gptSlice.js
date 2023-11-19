import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        moviesName: null,
        moviesResult: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },

        addGptMoviesRsult: (state, action) => {
            const {moviesName, moviesResult} = action.payload;
            state.moviesName = moviesName;
            state.moviesResult = moviesResult;
        }
    }
});

export const {toggleGptSearchView, addGptMoviesRsult} = gptSlice.actions;
export default gptSlice.reducer;