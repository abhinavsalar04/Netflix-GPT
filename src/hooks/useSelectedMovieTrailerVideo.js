import { useDispatch } from "react-redux"
import { API_OPTIONS, MOVIE_DETAILS_BASE_URL } from "../utils/constants";
import { addSelectedMovieTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";

const useSelectedMovieTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const getTrailerVideos = async () => {
        const videos = await fetch(`${MOVIE_DETAILS_BASE_URL}${movieId}/videos`, API_OPTIONS)

        const jsonData = await videos.json();

        const filterVideos = jsonData?.results?.filter((video) => video?.type === 'Trailer');
        
        dispatch(addSelectedMovieTrailerVideo(filterVideos[0]));
        // console.log(filterVideos);
    }

    useEffect(() => {
        getTrailerVideos();
    },[])
}

export default useSelectedMovieTrailerVideo;