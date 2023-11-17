import { useEffect } from "react";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlaying = async () => {
        const moviesList = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );

        const jsonData = await moviesList.json();
        
        // adding nowPLaying movies to moviesSlice store
        dispatch(addNowPlayingMovies(jsonData));
        // console.log(jsonData);
    };

    useEffect(() => {
        nowPlaying();
    }, []);
}

export default useNowPlayingMovies;