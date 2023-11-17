import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    useNowPlayingMovies();
    return (
        <div className="">
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {
                /*
                - MainContainer
                    - VideoBackground(Trailer)
                    - Video Title
                    - Play Button
                    - More Info Button
                - Secondary Container
                    - MovesList (A lots of movies list)
                        - movies cards (A lots of movies cards into one moviesList)
                */
            }
        </div>
    )
}

export default Browse;