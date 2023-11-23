import { useEffect } from "react";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const dispatch = useDispatch();
    const nowPlaying = async () => {
        const moviesList = await fetch(`${MOVIE_DETAILS_BASE_URL}now_playing?page=1`, API_OPTIONS
        );
        
        // console.log();
        const jsonData = await moviesList.json();
        
        // adding nowPLaying movies to moviesSlice store
        dispatch(addNowPlayingMovies(jsonData));
        // console.log("Now Playing", jsonData);
    };

    useEffect(() => {
        if(!nowPlayingMovies) nowPlaying();
    }, []);
}

export default useNowPlayingMovies;