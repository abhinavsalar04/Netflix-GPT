import React from "react";
import { useSelector } from "react-redux";
import useHomePageMovieTrailer from "../../hooks/useHomePageMovieTrailer";


const VideoBackground = ({movieId}) => {
    const homePageTrailerVideo = useSelector(store => store.movies?.homePageTrailerVideo);
    useHomePageMovieTrailer(movieId);

    return (
        <div className="">
            <iframe  
                className="w-screen aspect-video  z-10"
                src={"https://www.youtube.com/embed/" + homePageTrailerVideo?.key + "?controls=0&showinfo=0&autoplay=1&mute=1"}
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
    );
}

export default VideoBackground;