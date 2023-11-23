import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
        selectedMovieDetails: null,
        selectedMovieCredits: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addSelectedMovieDetails: (state, action) => {
            state.selectedMovieDetails = action.payload;
        },
        addSelectMovieCredits: (state, action) => {
            state.selectedMovieCredits = action.payload;
        }
    }
});

export const {
    addNowPlayingMovies, 
    addTrailerVideo, 
    addPopularMovies, 
    addTopRatedMovies, 
    addUpcomingMovies, 
    addSelectedMovieDetails,
    addSelectMovieCredits
} = moviesSlice.actions;

export default moviesSlice.reducer;