import React from "react";
import ReactPlayer from "react-player/youtube";

import "./videoPopup_style.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowTrailer } from "../../store/moviesSlice";

const VideoPopup = () => {
    const selectedMovieTrailerVideo = useSelector((store) => store.movies.selectedMovieTrailerVideo);
    const showTrailer = useSelector((store) => store.movies.showTrailer);
    
    const dispatch = useDispatch();

    const hidePopup = () => {
        dispatch(setShowTrailer(false));
    };
    
    // console.log(showTrailer, videoId);
    // console.log("key:",selectedMovieTrailerVideo);
    // console.log("play clicked!");
    return (
        <div className={`videoPopup ${showTrailer ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <div className="md:aspect-video lg:aspect-video h-[60dvh] w-full md:h-full lg:h-full">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${selectedMovieTrailerVideo?.key}`}
                        controls
                        width="100%"
                        height="100%"
                        playing={showTrailer}
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoPopup;