import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        homePageTrailerVideo: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
        selectedMovieDetails: null,
        selectedMovieCredits: null,
        selectedMovieTrailerVideo: null,
        similarMovies: null,
        recommendedMovies: null,
        showTrailer: false,
        movieSearchResults: null,
        searchedMovieName: null,
        isLoadingDetails: false,
        selectedMovieId: null,

    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addHomePageTrailerVideo: (state, action) => {
            state.homePageTrailerVideo = action.payload;
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
        },
        addSelectedMovieTrailerVideo: (state, action) => {
            state.selectedMovieTrailerVideo = action.payload;
        },
        addSimilarMovies: (state, action) => {
            state.similarMovies = action.payload;
        },
        addRecommendedMovies: (state, action) => {
            state.recommendedMovies = action.payload;
        },
        setShowTrailer: (state, action) =>  {
            state.showTrailer = action.payload;
        },
        addMovieSearchedResults: (state, action) => {
            const {movieName, searchResults} = action.payload;
            state.movieSearchResults = searchResults;
            state.searchedMovieName = movieName;
        },
        setIsLoadingDetails: (state, action) => {
            state.isLoadingDetails = action.payload;
        },
        setSelectedMovieId: (state, action) => {
            state.selectedMovieId = action.payload;
        }
    }
});

export const {
    addNowPlayingMovies, 
    addHomePageTrailerVideo, 
    addPopularMovies, 
    addTopRatedMovies, 
    addUpcomingMovies, 
    addSelectedMovieDetails,
    addSelectMovieCredits,
    addSelectedMovieTrailerVideo,
    addSimilarMovies,
    addRecommendedMovies,
    setShowTrailer,
    addMovieSearchedResults,
    setIsLoadingDetails,
    setSelectedMovieId
} = moviesSlice.actions;

export default moviesSlice.reducer;