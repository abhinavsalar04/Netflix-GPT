import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import openai from "../utils/openAI";
import { addGptMoviesRsult } from "../store/gptSlice";
import { API_OPTIONS } from "../utils/constants";


const GptSearchBar = () => {
    const [isFirstCall, setIsFirstCall] = useState(false);
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const langKey = useSelector(store => store.config.lang);
    
    const searchMovieTMDB = async (movie) => {
        const movieData = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

        const jsonData = await movieData.json();
        // console.log("jsonData",jsonData);
        return jsonData;
    }



    const gptSearchHandler = async () => {
        console.log(searchText.current.value);

        
        const prompt = "Act as a Movie Recommendation System and suggest some movies for the query: " +
            searchText.current.value +
            ". Only give me the names of 5 movies, comma separated like the example ahead. Example Result: Krish, URI, Mission Mangal, Koi Mil Gya, War";
       
        console.log(isFirstCall);
        if(isFirstCall) return;

        setIsFirstCall(true);
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
          });

        
          console.log(chatCompletion);
          if(!chatCompletion.choices){
            throw new Error("Unable to get response from GPT");
            return;
          }
        
          // The result will be Koi Mil Gya, Andaz Apna Apna, Gadar
          // so creating array of movies from that
          const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",");
          console.log("gptMovies:", gptMovies);
          //getting the movieData of gptMovies

          const data =  gptMovies.map((movie) => searchMovieTMDB(movie));

        //    The data will contains unresolved Promises for each call not the movie data
        //    we to resolve the data explicitly using Promise.all();

          const moviesResult = await Promise.all(data);

           console.log(moviesResult);

          dispatch(addGptMoviesRsult({gptMoviesName: gptMovies, tmdbMoviesResult: moviesResult}));


    }
    return (
        <div className="pt-36 flex justify-center">
            <form 
                onSubmit={(e) => e.preventDefault()}
                className="w-1/2 bg-black grid grid-cols-12 rounded-md min-w-[500px]">
                <input 
                    ref={searchText}
                    type="text" 
                    placeholder={lang[langKey].placeholder} 
                    className="p-[10px] m-4 col-span-9 rounded-md bg-[rgb(51,51,51)] text-white"    
                    />
                <button
                    onClick={gptSearchHandler}
                    className="col-span-3 m-4  text-gray-300 font-bold bg-[rgb(229,21,9)] bg-opacity-80 rounded-md"
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
}

export default GptSearchBar;