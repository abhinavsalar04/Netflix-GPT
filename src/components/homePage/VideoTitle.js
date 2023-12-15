import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { addSelectMovieCredits, addSelectedMovieDetails, addSelectedMovieTrailerVideo } from "../../store/moviesSlice";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import VideoPopup from "../movieDetails/VideoPopup";

const VideoTitle = ({title, overview, movieId}) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const setData = async () => {
        const movieDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}`, API_OPTIONS);
        const creditDetails = await fetch(`${MOVIE_DETAILS_BASE_URL+movieId}/credits`, API_OPTIONS);

        const jsonMovieData = await movieDetails.json();
        const jsonCreditData = await creditDetails.json();

        dispatch(addSelectedMovieDetails(jsonMovieData));
        dispatch(addSelectMovieCredits(jsonCreditData));
    }
   
    const showMoreInfoHandler = async (movieId) => {

        setData(movieId);
        // console.log(jsonMovieData);
        navigate("/movieDetails")
    }
    return (
        <div className="pt-[40%] pl-6 w-screen aspect-video md:pt-[15%]  md:px-12 lg:mb-24 absolute text-white bg-gradient-to-r from-gray-950">
            <h1 className="text-lg md:text-4xl lg:text-5xl  font-bold  md:m-0">{title}</h1>
            <p className="hidden md:inline-block lg:text-lg md:text-[100%] md:py-6 md:w-[70%]">{overview}</p>
            <div className="mt-[4px] md:m-0">
                <button 
                    // onClick={() => handlePlay(movieId)}
                    className="hidden md:inline-block bg-white text-black md:p-[.25rem] md:px-[1.3rem] p-[.15rem] px-[.85rem] rounded-[3px] hover:bg-opacity-80 md:text-md text-sm cursor-pointer">
                    <span className="flex justify-center items-center">
                        <span className="px-[2px]">
                            <FaPlay />
                        </span>
                        Play
                    </span>
                    
                </button>
                <button
                    onClick={() => showMoreInfoHandler(movieId)}
                    className="hidden md:inline-block bg-gray-300 text-white p-[0.15rem]  px-[0.8rem] mx-2 bg-opacity-30 rounded-[3px] hover:bg-opacity-20 cursor-pointer"
                    >
                    More Info
                </button>
            </div>
            <VideoPopup 
                    showTrailer={showTrailer}
                    setShowTrailer={setShowTrailer}
            />
        </div>
    );
}

export default VideoTitle;