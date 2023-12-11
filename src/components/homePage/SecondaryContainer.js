import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    if(!movies) return;
    // console.log("movies", movies?.nowPlayingMovies);
    return (
        movies.nowPlayingMovies &&(
            <div className="bg-black w-screen md:-mt-[15%] lg:-mt-[20%] -mt-8">
            <div className="pl-4   relative z-30">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
            </div>
                <div className="pl-4 relative z-30">
                    <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                    <MovieList title={"Popular"} movies={movies?.popularMovies} />
                    <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
                </div>
            </div>
        )
    );
};

export default SecondaryContainer;
