import { useDispatch, useSelector } from "react-redux";
import { addRecommendedMovies, addSelectMovieCredits, addSelectedMovieDetails, addSelectedMovieTrailerVideo, addSimilarMovies, setIsLoadingDetails } from "../store/moviesSlice";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../utils/constants";
import { useEffect } from "react";

const useSelectedMovieDetails = () => {
    const dispatch = useDispatch();
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);
    const selectedMovieId = useSelector((store) => store.movies.selectedMovieId);
    const movieDetailsHandler = async (movieId) => {
        try{
            const movieDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}`, API_OPTIONS);
            const creditDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}/credits`, API_OPTIONS);
            const similarMoviesList = await fetch(`${MOVIE_DETAILS_BASE_URL}${movieId}/similar`, API_OPTIONS);
            const recommendedMoviesList = await fetch(`${MOVIE_DETAILS_BASE_URL}${movieId}/recommendations`, API_OPTIONS);
            const trailerVideos = await fetch(`${MOVIE_DETAILS_BASE_URL}${movieId}/videos`, API_OPTIONS)

            

            const jsonMovieData = await movieDetails.json();
            const jsonCreditData = await creditDetails.json();
            const jsonSimilarMoviesData = await similarMoviesList.json();
            const jsonRecommendedMovieData = await recommendedMoviesList.json();
            const jsonTrailerData = await trailerVideos.json();

            
            dispatch(addSelectedMovieDetails(jsonMovieData));
            dispatch(addSelectMovieCredits(jsonCreditData));
            dispatch(addSimilarMovies(jsonSimilarMoviesData));
            dispatch(addRecommendedMovies(jsonRecommendedMovieData));
            
            const filterVideos = jsonTrailerData?.results?.filter((video) => video?.type === 'Trailer');
            console.log("trailer details: ", jsonTrailerData)
            dispatch(addSelectedMovieTrailerVideo(filterVideos[0]));

            console.log("selectedMovie:", selectedMovieDetails);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        if(!selectedMovieDetails)
        movieDetailsHandler(selectedMovieId);
    }, [])
}

export default useSelectedMovieDetails;