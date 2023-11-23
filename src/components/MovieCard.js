import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL, MOVIE_POSTER_CDN } from "../utils/constants";
import { addSelectMovieCredits, addSelectedMovieDetails } from "../store/moviesSlice";
import {Link} from "react-router-dom"

const MovieCard = ({poster_path, movieId}) => {
    const dispatch = useDispatch();
    if(!poster_path) return;

    // console.log(poster_path);

    const movieDetailsHandler = async (movieId) => {
        const movieDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}`, API_OPTIONS);
        const creditDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}/credits`, API_OPTIONS);

        const jsonMovieData = await movieDetails.json();
        const jsonCreditData = await creditDetails.json();

        dispatch(addSelectedMovieDetails(jsonMovieData));
        dispatch(addSelectMovieCredits(jsonCreditData));
        console.log(jsonMovieData);
    }

    return (
        <div className="pr-[5px] w-32 cursor-pointer" onClick={() => movieDetailsHandler(movieId)}>
        <Link className="links" to={"/movieDetails"}>
            <img className="h-36 w-full rounded-[2px] transition-all duration-400 hover:scale-110" src={MOVIE_POSTER_CDN + poster_path} alt="Movie poster" />
        </Link>
            
        </div>
    );
}

export default MovieCard;