import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../utils/constants";
import { addSimilarMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useSimilarMovies =  (movieId) => {
    const similarMovies = useSelector((store) => store.movies.similarMovies);
    const dispatch = useDispatch();

    const getSimilarMovies = async (movieId) => {
        console.log("movieId: ", movieId);
        const moviesList = await fetch(`${MOVIE_DETAILS_BASE_URL}${movieId}/similar`, API_OPTIONS);
        const jsonData = await moviesList.json();
        dispatch(addSimilarMovies(jsonData));
        console.log("Similar movies:",jsonData);
    }

    useEffect(() => {
        // if(!similarMovies){
            getSimilarMovies(movieId);
        // }
    }, []);
}

export default useSimilarMovies;