import { useEffect } from "react";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store.popularMovies);
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const moviesList = await fetch(`${MOVIE_DETAILS_BASE_URL}popular`, API_OPTIONS)
        
        const josnData = await moviesList.json();
        dispatch(addPopularMovies(josnData));
        // console.log("Popular: ", josnData);

    }

    useEffect(() => {
        if(!popularMovies) getPopularMovies();
    }, [])
}

export default usePopularMovies;