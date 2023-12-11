import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";

import "./videoPopup_style.css";
import { useDispatch, useSelector } from "react-redux";
import useSelectedMovieTrailerVideo from "../../hooks/useSelectedMovieTrailerVideo";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../../utils/constants";
import { addSelectedMovieTrailerVideo, setShowTrailer } from "../../store/moviesSlice";

const VideoPopup = () => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails);
    const selectedMovieTrailerVideo = useSelector((store) => store.movies.selectedMovieTrailerVideo);
    const showTrailer = useSelector((store) => store.movies.showTrailer);
    
    const {id} = selectedMovieDetails;
    const dispatch = useDispatch();

     useSelectedMovieTrailerVideo(id);

    const hidePopup = () => {
        dispatch(setShowTrailer(false));
    };

    // console.log(showTrailer, videoId);
    console.log("key:",selectedMovieTrailerVideo);
    return (
        <div className={`videoPopup ${showTrailer ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${selectedMovieTrailerVideo?.key}`}
                    controls
                    width="100%"
                    height="100%"
                    playing={showTrailer}
                />
            </div>
        </div>
    );
};

export default VideoPopup;