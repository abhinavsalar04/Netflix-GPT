import { useDispatch, useSelector } from "react-redux";
import { MOVIE_POSTER_CDN } from "../../utils/constants";
import { FiPlayCircle } from "react-icons/fi";
import CircleRating from "./CircleRating";
import dayjs from "dayjs"
import Header from "../Header";
import VideoPopup from "./VideoPopup";
import { setShowTrailer } from "../../store/moviesSlice";


const MovieDetailsMainContainer = () => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails)
    const selectedMovieCredits = useSelector((store) => store.movies.selectedMovieCredits)
    const showTrailer = useSelector((store) => store.movies.showTrailer);
    const dispatch = useDispatch();

   // const showTrailer = userSlice((store) => store.movies.showTrailer);
   if(!selectedMovieDetails) return null;
    const crew = selectedMovieCredits?.crew;
    console.log()
    
    const directors = crew?.filter((f) => f.job === "Director");
    const writers = crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );
    
    // console.log(directors);
    const director = directors[0]?.name;
    const writer = writers[0]?.name;

   
    // console.log(director, writer);
    const {title, tagline, genres, poster_path, overview, backdrop_path, vote_average, release_date, runtime, status} = selectedMovieDetails;
    const hours = parseInt(runtime / 60), minutes = (runtime % 60);

    // console.log(poster_path);
    const handleWatchTrailer = (id) => {
        dispatch(setShowTrailer(true));
       
    }
    

    return (
        <>
            {/* <div className="h-full  w-full absolute opacity-10">
                <img 
                    className="object-cover w-full h-full object-center"
                    src={`https://image.tmdb.org/t/p/original/${selectedMovieDetails?.backdrop_path}`} alt="logo" 
                />
            </div> */}
           <div className="bg-opacity-[60%] bg-white">
                <Header />
            </div>
            <div
                className="flex flex-col md:flex-row pt-12 pb-8 md:pt-20 justify-center bg-inherit  text-white md:px-[10%]">
                <div className="md:pr-8 lg:pr-8 flex-shrink-0 px-2">
                    <img className="w-screen md:w-[350px] lg:[350px] rounded-lg" src={MOVIE_POSTER_CDN + poster_path} alt="movie-poster" />
                </div>
                <div className="md:max-w-[750px] my-8 ml-6 md:py-0 md:my-0">
                    <h1 className="text-5xl">{title}</h1>
                    <h2 className="text-xl my-2 text-gray-400">{tagline}</h2>
                    <div className="my-4">
                        {
                            genres.map((genre) => (
                                    <span 
                                        className="bg-red-700 text-center mr-[5px] rounded px-2 text-white text-xs"
                                        key={genre.id}>
                                        {genre.name}
                                    </span>
                                )
                            )
                        }
                    </div>
                    <div className="flex items-center my-4">
                        <div className="w-20 "> 
                            <CircleRating rating={vote_average} maxValue={10} isNumeric={false}/>
                        </div>
                        <div 
                            className="mx-[25px] cursor-pointer" 
                            onClick={() => handleWatchTrailer(selectedMovieDetails.id)}
                        >
                            <FiPlayCircle style={{fontSize: "80px"}} className="transition-all ease-out 300 hover:text-red-700"/>
                        </div>
                        <div 
                            onClick={() => handleWatchTrailer(selectedMovieDetails.id)}
                            className="text-xl cursor-pointer transition-all ease 300 hover:text-red-700" >
                            Watch Trailer
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl py-2">Overview</h1>
                        <p className="text-sm">{overview}</p>
                    </div>
                    <div>
                        <div className="flex my-4 ">
                            <div className="font-bold flex mr-[8px] flex-wrap">
                                <span className="mr-[8px] leading-[24px]">Status:</span>
                                <span className="font-normal mr-[8px] leading-[24px] text-gray-500">{status}</span>
                            </div>
                            <div className="font-bold flex mx-[8px] flex-wrap">
                                <span className="md:w-32  leading-[24px]">Release Date:</span>
                                <span className="md:w-32 font-normal leading-[24px] text-gray-500 ">
                                    {dayjs(release_date).format("MMM D, YYYY")}
                                </span>
                            </div>
                            <div className="font-bold flex mx-[8px] flex-wrap">
                                <span className="mx-[8px] leading-[24px]">Runtime:</span>
                                <span className=" font-normal mx-[8px] leading-[24px] text-gray-500">
                                {hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`}

                                </span>
                            </div>
                        </div>
                        <hr className="lg:w-[108%] md:w-[120%] w-[99%]" style={{borderTop: "1px solid #3e3f40"}}></hr>
                        <div className="flex my-4">
                            <h2 className="font-bold ">Director:
                                    <span className="font-normal px-2 text-gray-500">{director}</span>
                            </h2>
                        </div>
                        <hr className="lg:w-[108%] md:w-[120%] w-[99%]" style={{borderTop: "1px solid #3e3f40"}}></hr>
                        <div className="flex my-4">
                            <h2 className="font-bold ">Writer:
                                    <span className="font-normal px-2 text-gray-500">{writer}</span>
                            </h2>
                        </div>
                        <hr className="lg:w-[108%] md:w-[120%] w-[99%]" style={{borderTop: "1px solid #3e3f40"}}></hr>
                    </div>
                </div>
                <VideoPopup 
                    showTrailer={showTrailer}
                    setShowTrailer={setShowTrailer}
                />

            </div>
        </>
    );
}

export default MovieDetailsMainContainer;