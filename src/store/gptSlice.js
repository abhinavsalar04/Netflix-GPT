import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMoviesName: null,
        tmdbMoviesResult: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },

        addGptMoviesRsult: (state, action) => {
            const {gptMoviesName, tmdbMoviesResult} = action.payload;
            state.gptMoviesName = gptMoviesName;
            state.tmdbMoviesResult = tmdbMoviesResult;
        }
    }
});

export const {toggleGptSearchView, addGptMoviesRsult} = gptSlice.actions;
export default gptSlice.reducer;