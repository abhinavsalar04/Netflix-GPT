import { useEffect } from "react";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () => {
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
     const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const moviesList = await fetch(`${MOVIE_DETAILS_BASE_URL}upcoming`, API_OPTIONS);

        const jsonData = await moviesList.json();
        dispatch(addUpcomingMovies(jsonData));
        // console.log("Upcoming:", jsonData); 
        
    }

    useEffect(() => {
        if(!upcomingMovies) getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;