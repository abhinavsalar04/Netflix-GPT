import { useSelector } from "react-redux";
import MovieList from "../homePage/MovieList";

const ShowSearchedMovies = () => {
   const {movieSearchResults, searchedMovieName} = useSelector((store) => store.movies);
    // console.log(movieSearchResults);
    if(!searchedMovieName) return <div  className=" pt-[270px] w-screen">
    </div>

    if(searchedMovieName && movieSearchResults.total_results === 0)
    return  <>
        <h2 className={`text-[#ff0026] flex justify-center text-2xl  bg-[rgb(51,51,51)] bg-opacity-70 px-4 mx-auto items-center mt-4 rounded`}>No result found!</h2>
        <div  className=" pt-[220px] w-screen text-[cyan]">
        </div>
    </>
      
    return (
        <div className="p-4 m-4 bg-black text-white rounded-md justify-center bg-opacity-70">
            <div>    
                <MovieList 
                    key={searchedMovieName} 
                    title={searchedMovieName} 
                    movies={movieSearchResults}
                />   
            </div>
        </div>
    );
}

export default ShowSearchedMovies;