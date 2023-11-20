import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () => {
     const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const moviesList = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS);

        const jsonData = await moviesList.json();
        dispatch(addUpcomingMovies(jsonData));
        // console.log("Upcoming:", jsonData); 
        
    }

    useEffect(() => {
        getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;