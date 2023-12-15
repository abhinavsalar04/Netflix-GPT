import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL, MOVIE_POSTER_CDN } from "../../utils/constants";
import { addRecommendedMovies, addSelectMovieCredits, addSelectedMovieDetails, addSelectedMovieTrailerVideo, addSimilarMovies, setIsLoadingDetails } from "../../store/moviesSlice";
import {useNavigate} from "react-router-dom"

const MovieCard = ({poster_path, movieId}) => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if(!poster_path) return;
    const clickHandler = (movieId) => {
        dispatch(setIsLoadingDetails(true));
        navigate("/movieDetails");
        movieDetailsHandler(movieId);
    }
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
        finally{
            dispatch(setIsLoadingDetails(false));
        }
        // navigate("/movieDetails")
        // console.log(jsonMovieData);
        
        // console.log("Similar movies:",jsonData);
    }


    return (
        <div 
            className="pr-[5px] w-32 cursor-pointer" 
            onClick={() => clickHandler(movieId)}
        >
            <img className="h-36 w-full rounded-[2px] transition-all duration-400 hover:scale-110" src={MOVIE_POSTER_CDN + poster_path} alt="Movie poster" />  
        </div>
    );
}

export default MovieCard;