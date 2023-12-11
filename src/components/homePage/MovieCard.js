import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL, MOVIE_POSTER_CDN } from "../../utils/constants";
import { addRecommendedMovies, addSelectMovieCredits, addSelectedMovieDetails, addSimilarMovies } from "../../store/moviesSlice";
import {useNavigate} from "react-router-dom"

const MovieCard = ({poster_path, movieId}) => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if(!poster_path) return;

    const movieDetailsHandler = async (movieId) => {
        const movieDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}`, API_OPTIONS);
        const creditDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}/credits`, API_OPTIONS);
        const similarMoviesList = await fetch(`${MOVIE_DETAILS_BASE_URL}${movieId}/similar`, API_OPTIONS);
        const recommendedMoviesList = await fetch(`${MOVIE_DETAILS_BASE_URL}${movieId}/recommendations`, API_OPTIONS);
        

        const jsonMovieData = await movieDetails.json();
        const jsonCreditData = await creditDetails.json();
        const jsonSimilarMoviesData = await similarMoviesList.json();
        const jsonRecommendedMovieData = await recommendedMoviesList.json();

        dispatch(addSelectedMovieDetails(jsonMovieData));
        dispatch(addSelectMovieCredits(jsonCreditData));
        dispatch(addSimilarMovies(jsonSimilarMoviesData));
        dispatch(addRecommendedMovies(jsonRecommendedMovieData));

        console.log("selectedMovie:", selectedMovieDetails);
        navigate("/movieDetails")
        // console.log(jsonMovieData);
        
        // console.log("Similar movies:",jsonData);
    }


    return (
        <div 
            className="pr-[5px] w-32 cursor-pointer" 
            onClick={() => movieDetailsHandler(movieId)}
        >
            <img className="h-36 w-full rounded-[2px] transition-all duration-400 hover:scale-110" src={MOVIE_POSTER_CDN + poster_path} alt="Movie poster" />  
        </div>
    );
}

export default MovieCard;