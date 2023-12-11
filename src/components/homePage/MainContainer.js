import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies.results[2];

    const {original_title, overview, id} = mainMovie;
    
    function truncateText(text, maxWords) {
        const words = text.split(" ");
        if(words.length <= maxWords) return text;
        const truncatedWords = words.slice(0, maxWords);
        const truncatedText = truncatedWords.join(" ");
      
        return `${truncatedText}...`;
    }
    
    const truncatedOverview = truncateText(overview, 20);

    
    return (
        <div className=" md:pt-0 bg-black">
            <VideoTitle title={original_title} overview={truncatedOverview} movieId={id}/>
            <VideoBackground movieId={id}/>
        </div>
    );
};

export default MainContainer;