import { useSelector } from "react-redux";
import Cast from "./Cast";
import MovieList from "../homePage/MovieList";

const MovieDetailsSecondaryContainer = () => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);
    const similarMovies = useSelector((store) => store.movies.similarMovies);
    const recommendedMovies = useSelector((store) => store.movies.recommendedMovies);
    if(!selectedMovieDetails) return; 
    
    return (
        <div className="flex flex-col md:px-[5%] lg:px-[10%]">
            <div className="px-4 md:px-0 lg:px-0">
                <h1 className="text-white text-xl pb-8">Top Cast</h1>
                <Cast />
            </div>
           <div className="px-4 md:px-0 lg:px-0">
                <MovieList title={"Similar Movies"} movies={similarMovies}/>
           </div>
           {
                recommendedMovies?.results?.length  &&
                <div className="px-4 md:px-0 lg:px-0">
                    <MovieList title={"Recommended Movies"} movies={recommendedMovies}/>
                </div>
           
           }
        </div>
    );
}

export default MovieDetailsSecondaryContainer;