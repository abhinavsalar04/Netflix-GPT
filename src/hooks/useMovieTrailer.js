import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const videos = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);

        const jsonData = await videos.json();

        const filterVideos = jsonData.results.filter(video => video?.type === 'Trailer');

        const trailer = filterVideos.length !== 0 ? filterVideos[0] : jsonData.results[0];
        dispatch(addTrailerVideo(trailer));
        // console.log(trailer);
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
}

export default useMovieTrailer;