import { useSelector } from "react-redux";
import MovieList from "../homePage/MovieList";

const ShowSearchedMovies = () => {
   const {movieSearchResults, searchedMovieName} = useSelector((store) => store.movies);
    console.log(movieSearchResults);
    if(!searchedMovieName)
      return (<div  className=" pt-[275px] w-screen"></div>);

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