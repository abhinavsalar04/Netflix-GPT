import { MOVIE_POSTER_CDN } from "../utils/constants";

const MovieCard = ({poster_path}) => {
    if(!poster_path) return;
    // console.log(poster_path);
    return (
        <div className="pr-[5px] w-32">
            <img className="h-36 w-full rounded-[2px] transition-all duration-400 hover:scale-110" src={MOVIE_POSTER_CDN + poster_path} alt="Movie poster" />
        </div>
    );
}

export default MovieCard;