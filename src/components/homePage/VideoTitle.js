import React  from "react";
import { useDispatch } from "react-redux";
import { addSelectMovieCredits, addSelectedMovieDetails } from "../../store/moviesSlice";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({title, overview, movieId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const showMoreInfoHandler = async (movieId) => {

        const movieDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}`, API_OPTIONS);
        const creditDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}/credits`, API_OPTIONS);

        const jsonMovieData = await movieDetails.json();
        const jsonCreditData = await creditDetails.json();

        dispatch(addSelectedMovieDetails(jsonMovieData));
        dispatch(addSelectMovieCredits(jsonCreditData));
        // console.log(jsonMovieData);
        navigate("/movieDetails")
    }
    return (
        <div className="pt-[40%] pl-6 w-screen aspect-video md:pt-[20%] md:px-12 absolute text-white bg-gradient-to-r from-gray-950">
            <h1 className="text-lg md:text-4xl font-bold -mt-[6rem] md:m-0">{title}</h1>
            <p className="hidden md:inline-block  md:text-[100%] md:py-6 md:w-[70%] sm:max-w-[60%]">{overview}</p>
            <div className="mt-[4px] md:m-0">
                <button 
                    className="bg-white text-black md:p-[.25rem] md:px-[1.3rem] p-[.15rem] px-[.85rem] rounded-[3px] hover:bg-opacity-80 md:text-md text-sm cursor-pointer">
                    Play
                </button>
                <button
                    onClick={() => showMoreInfoHandler(movieId)}
                    className="hidden md:inline-block bg-gray-300 text-white p-[0.15rem]  px-[0.8rem] mx-2 bg-opacity-30 rounded-[3px] hover:bg-opacity-20 cursor-pointer"
                    >
                    More Info
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;