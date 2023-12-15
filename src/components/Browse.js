import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./homePage/MainContainer";
import SecondaryContainer from "./homePage/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import GptSearchPage from "./gptSearchPage/GptSearchPage";
import BrowseShimmer from "./shimmer/BrowseShimmer";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    const {nowPlayingMovies} = useSelector((store) => store.movies);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    // console.log("Browse Compoenent!");
    if(showGptSearch) return <GptSearchPage />
    return !nowPlayingMovies ? (
       <>
            <Header></Header>
            <BrowseShimmer />
            <Footer />
       </>
    ) : (      
        <div className="">
            <Header opacity={90} />
            <MainContainer />
            <SecondaryContainer />
            <Footer />
        </div>
    )
}

export default Browse;