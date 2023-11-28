import { useDispatch, useSelector } from "react-redux";
import { addHomePageTrailerVideo} from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../utils/constants";

const useHomePageMovieTrailer = (movieId) => {
    const homePageTrailerVideo = useSelector((store) =>  store.movies.homePageTrailerVideo);
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const videos = await fetch(`${MOVIE_DETAILS_BASE_URL}${movieId}/videos`, API_OPTIONS);

        const jsonData = await videos.json();

        const filterVideos = jsonData.results.filter(video => video?.type === 'Trailer');

        const trailer = filterVideos.length !== 0 ? filterVideos[0] : jsonData.results[0];
        dispatch(addHomePageTrailerVideo(trailer));
        // console.log(trailer);
    };

    useEffect(() => {
        if(!homePageTrailerVideo) getMovieVideos();
    }, []);
}

export default useHomePageMovieTrailer;