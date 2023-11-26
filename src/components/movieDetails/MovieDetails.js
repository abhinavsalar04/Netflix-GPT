
import MovieDetailsMainContainer from "./MovieDetailsMainContainer";
import MovieDetailsSecondaryContainer from "./MovieDetailsSecondaryContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useSimilarMovies from "../../hooks/useSimilarMovies";

const MovieDetails = () => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!selectedMovieDetails)
        navigate("/browse");
    },[]);

    // useSimilarMovies(selectedMovieDetails?.id);

    console.log("MovieDdetails Component!");
    return (
        <div className="bg-black w-screen ">
            <MovieDetailsMainContainer />
            <MovieDetailsSecondaryContainer />
        </div>
    );
}

export default MovieDetails;