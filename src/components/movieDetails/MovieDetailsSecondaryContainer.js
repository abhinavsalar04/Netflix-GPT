import { useSelector } from "react-redux";
import Cast from "./Cast";
import MovieList from "../MovieList";

const MovieDetailsSecondaryContainer = () => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    if(!selectedMovieDetails) return; 
    return (
        <div>
            <div className="mx-8">
                <Cast />
            </div>
           <div className="mx-8">
                <MovieList title={"Recommended"} movies={popularMovies}/>
           </div>
        </div>
    );
}

export default MovieDetailsSecondaryContainer;