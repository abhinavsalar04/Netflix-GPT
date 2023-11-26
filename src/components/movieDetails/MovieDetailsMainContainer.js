import { useSelector } from "react-redux";
import { MOVIE_POSTER_CDN } from "../../utils/constants";
import { FiPlayCircle } from "react-icons/fi";
import CircleRating from "./CircleRating";
import dayjs from "dayjs"
import Header from "../Header";

const MovieDetailsMainContainer = () => {
    const selectedMovieDetails = useSelector((store) => store.movies.selectedMovieDetails)
    const selectedMovieCredits = useSelector((store) => store.movies.selectedMovieCredits)
    
    if(!selectedMovieDetails) return null;
    const crew = selectedMovieCredits?.crew;
    
    
    const directors = crew?.filter((f) => f.job === "Director");
    const writers = crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );
    
    console.log(directors);
    const director = directors[0]?.name;
    const writer = writers[0]?.name;

   
    // console.log(director, writer);
    const {title, tagline, genres, poster_path, overview, backdrop_path, vote_average, release_date, runtime, status} = selectedMovieDetails;
    const hours = parseInt(runtime / 60), minutes = (runtime % 60);

    // console.log(poster_path);
    const handleWatchTrailer = () => {
        // console.log(backdrop_path);
    }
    return (
        <>
           <div className="">
                <Header />
            </div>
            <div
                className=" flex flex-col md:flex-row pt-12 pb-8 md:pt-32 justify-center bg-gradient-to-b from-[rgb(51,51,51)] to-black  text-white grid-cols-12 ">
                    {/* <Header /> */}
                <div className="px-8 md:mx-4 md:ml-8">
                    <img className="w-full md:w-[325px]  rounded-lg" src={MOVIE_POSTER_CDN + poster_path} alt="movie-poster" />
                </div>
                <div className="md:max-w-[50%] my-8 mx-8 md:py-0 md:my-0">
                    <h1 className="text-4xl">{title}</h1>
                    <h2 className="text-xl my-2">{tagline}</h2>
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
                            <CircleRating rating={vote_average} />
                        </div>
                        <div className="mx-[25px] cursor-pointer" onClick={handleWatchTrailer}>
                            <FiPlayCircle style={{fontSize: "80px"}} className="transition-all ease-out 300 hover:text-red-700"/>
                        </div>
                        <div 
                            onClick={handleWatchTrailer}
                            className="text-xl cursor-pointer transition-all ease 300 hover:text-red-700" >
                            Watch Trailer
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl py-2">Overview</h1>
                        <p className="text-sm">{overview}</p>
                    </div>
                    <div>
                        <div className="flex my-4">
                            <h2 className="font-bold ">Status:
                                <span className="font-normal px-2 text-gray-500">{status}</span>
                            </h2>
                            <h2 className="font-bold px-2 mx-4">Release Date:
                                <span className="font-normal px-2 text-gray-500">
                                    {dayjs(release_date).format("MMM D, YYYY")}
                                </span>
                            </h2>
                            <h2 className="font-bold">Runtime: 
                                <span className="font-normal px-2 text-gray-500">
                                {hours > 0 ? <>{hours}h {minutes}m</> : `${minutes}m`}

                                </span>
                            </h2>
                        </div>
                        <hr className="" style={{borderTop: "1px solid #3e3f40"}}></hr>
                        <div className="flex my-4">
                            <h2 className="font-bold ">Director:
                                    <span className="font-normal px-2 text-gray-500">{director}</span>
                            </h2>
                        </div>
                        <hr className="" style={{borderTop: "1px solid #3e3f40"}}></hr>
                        <div className="flex my-4">
                            <h2 className="font-bold ">Writer:
                                    <span className="font-normal px-2 text-gray-500">{writer}</span>
                            </h2>
                        </div>
                        <hr className="" style={{borderTop: "1px solid #3e3f40"}}></hr>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MovieDetailsMainContainer;