import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const moviesList = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);

        const jsonData = await moviesList.json();
        console.log("TopRated:", jsonData);
        dispatch(addTopRatedMovies(jsonData.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;