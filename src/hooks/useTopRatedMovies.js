import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () => {
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const moviesList = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);

        const jsonData = await moviesList.json();
        dispatch(addTopRatedMovies(jsonData));
        // console.log("TopRated:", jsonData);
    }

    useEffect(() => {
        if(!topRatedMovies) getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;