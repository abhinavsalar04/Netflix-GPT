import Footer from "../Footer";
import MovieDetailsMainContainer from "./MovieDetailsMainContainer";
import MovieDetailsSecondaryContainer from "./MovieDetailsSecondaryContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const MovieDetails = () => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!selectedMovieDetails)
        navigate("/browse");
    },[]);

    return (
        <div className="bg-black w-screen">
            <MovieDetailsMainContainer />
            <MovieDetailsSecondaryContainer />
            <Footer />
        </div>
    );
}

export default MovieDetails;