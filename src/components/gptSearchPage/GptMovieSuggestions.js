import { useSelector } from "react-redux";
import MovieList from "../homePage/MovieList";

const GptMoviesSuggestions = () => {
    const gpt = useSelector((store) => store.gpt);
    const {gptMoviesName, tmdbMoviesResult} = gpt;

    if(!gptMoviesName)
      return (<div  className=" pt-[275px] w-screen"></div>);

    return (
        <div className="p-4 m-4 bg-black text-white rounded-md justify-center bg-opacity-70">
            <div>
                {
                    gptMoviesName.map((movieName, index) => 
                    <MovieList 
                        key={movieName} 
                        title={movieName} 
                        movies={tmdbMoviesResult[index]}/>
                    )
                }
                {/* <MovieList title={gptMoviesName[0]} movies={tmdbMoviesResult[0].results}/> */}
            </div>
        </div>
    );
}

export default GptMoviesSuggestions;