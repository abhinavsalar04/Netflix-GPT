import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMoviesName: null,
        tmdbMoviesResult: null,
        isGptSearchClicked: false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        setGptSearchView: (state, action) => {
            state.showGptSearch = action.payload;
        },
        addGptMoviesRsult: (state, action) => {
            const {gptMoviesName, tmdbMoviesResult} = action.payload;
            state.gptMoviesName = gptMoviesName;
            state.tmdbMoviesResult = tmdbMoviesResult;
        },
        setIsGptSeachClicked: (state, action) =>{
            state.isGptSearchClicked = action.payload;
        }
    }
});

export const {toggleGptSearchView, addGptMoviesRsult, setGptSearchView, setIsGptSeachClicked} = gptSlice.actions;
export default gptSlice.reducer;