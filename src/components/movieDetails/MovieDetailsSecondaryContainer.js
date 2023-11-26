import { useSelector } from "react-redux";
import Cast from "./Cast";
import MovieList from "../homePage/MovieList";

const MovieDetailsSecondaryContainer = () => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);
    const similarMovies = useSelector((store) => store.movies.similarMovies);
    const recommendedMovies = useSelector((store) => store.movies.recommendedMovies);
    
    if(!selectedMovieDetails) return; 
    
    return (
        <div className="flex flex-col md:px-[10%] px-[2%]">
            <div className="mx-4 md:mx-8">
                <h1 className="text-white text-2xl">Top Cast</h1>
                <Cast />
            </div>
           <div className="mx-4 md:mx-8 py-8">
                <MovieList title={"Similar Movies"} movies={similarMovies}/>
           </div>
           <div className="my-4">
                <MovieList title={"Recommended Movies"} movies={recommendedMovies}/>
           </div>
        </div>
    );
}

export default MovieDetailsSecondaryContainer;