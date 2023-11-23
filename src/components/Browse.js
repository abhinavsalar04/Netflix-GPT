import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div className="">
            <Header />
            {
                showGptSearch ? 
                (
                    <div className="flex flex-col">
                        <GptSearch />
                        <Footer />
                    </div>
                    
                ) : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                        <Footer />
                    </>
                )
            }
            

            
            
        </div>
    )
}

export default Browse;