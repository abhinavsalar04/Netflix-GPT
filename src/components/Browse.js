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

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    // console.log("Browse Compoenent!");
    if(showGptSearch) return <GptSearchPage />
    return (
        <div className="">
            <Header />
            <MainContainer />
            <SecondaryContainer />
            <Footer />
        </div>
    )
}

export default Browse;