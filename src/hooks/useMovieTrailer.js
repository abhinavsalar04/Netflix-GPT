import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const trailerVideo = useSelector((store) =>  store.movies.trailerVideo);
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const videos = await fetch(`${MOVIE_DETAILS_BASE_URL}${movieId}/videos`, API_OPTIONS);

        const jsonData = await videos.json();

        const filterVideos = jsonData.results.filter(video => video?.type === 'Trailer');

        const trailer = filterVideos.length !== 0 ? filterVideos[0] : jsonData.results[0];
        dispatch(addTrailerVideo(trailer));
        // console.log(trailer);
    };

    useEffect(() => {
        if(!trailerVideo) getMovieVideos();
    }, []);
}

export default useMovieTrailer;