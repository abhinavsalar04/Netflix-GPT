
import MovieDetailsMainContainer from "./MovieDetailsMainContainer";
import MovieDetailsSecondaryContainer from "./MovieDetailsSecondaryContainer";
import { useSelector } from "react-redux";

import Footer from "../Footer";
import MovieDetailsShimmer from "../shimmer/MovieDetailsShimmer";


const MovieDetails = () => {
    const isLoadingDetails = useSelector((store) => store.movies.isLoadingDetails);
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);

    return !selectedMovieDetails || isLoadingDetails ? (
        <MovieDetailsShimmer />
    ) : (
        <div className="bg-gradient-to-b from-[rgb(51,51,51)] to-black w-screen">
             
            <MovieDetailsMainContainer />
            <MovieDetailsSecondaryContainer />
            <Footer ></Footer>
        </div>
    );
}

export default MovieDetails;