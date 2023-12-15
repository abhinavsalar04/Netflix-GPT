import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { useRef, useState} from "react";
import openai from "../../utils/openAI";
import { addGptMoviesRsult } from "../../store/gptSlice";
import { API_OPTIONS } from "../../utils/constants";
import { BsStar } from "react-icons/bs";
import { addMovieSearchedResults } from "../../store/moviesSlice";
import { Triangle } from 'react-loader-spinner';


const GptSearchBar = ({searchType, setSearchType}) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const langKey = useSelector(store => store.config.lang);
    
    const searchMovieTMDB = async (movie) => {
        const movieData = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

        const jsonData = await movieData.json();
        return jsonData;
    }


    

    const normalSearchHandler = async () => {
        setIsLoading(true);
        try{
            const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`;
            const moviesList = await fetch(searchUrl, API_OPTIONS);
            const jsonData = await moviesList.json();
            dispatch(addMovieSearchedResults({movieName: searchText.current.value, searchResults: jsonData}));
        }
        catch(err){
            console.log(err);
        }
        finally{
            setIsLoading(false);
        }
       
    }
    const gptSearchHandler = async () => {
        setIsLoading(true);
        const prompt = "Act as a Movie Recommendation System and suggest some movies for the query: " +
            searchText.current.value +
            ". Only give me the names of 5 movies, comma separated like the example ahead. Example Result: Krish, URI, Mission Mangal, Koi Mil Gya, War";
     
        try{
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                model: 'gpt-3.5-turbo',
              });
    
            
              console.log(chatCompletion);
              if(!chatCompletion.choices){
                throw new Error("Unable to get response from GPT");
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
        catch(err){
            console.log(err);
        }
        finally{
            setIsLoading(false);
        }


    }

    const searchHander =  () => {
        if(searchType === 'search'){
            normalSearchHandler();
        }
        else if(searchType === 'gptsearch'){
            gptSearchHandler();
        }
        
    }
    return (
        <div >
            <div className="text-white flex justify-between bg-[rgb(51,51,51)] w-56 mx-auto mt-6 rounded-lg h-10 items-center  py-2 px-[2px]">
                <span 
                    onClick={() => setSearchType("search")}
                    className={`${searchType === 'search' ? 'bg-red-700' : ''} rounded-xl py-[5px] w-[50%] text-center cursor-pointer transition-all duration-700 `}>
                    Search
                </span>
                <span 
                    onClick={() => setSearchType("gptsearch")}
                    className={` ${searchType === 'gptsearch' ? 'bg-red-700' : ''} rounded-xl  py-[5px] w-[50%] text-center cursor-pointer transition-all duration-700 `}>
                    Gpt Search
                </span>
            </div>
            {
                searchType === 'gptsearch' &&
                <div className="text-[cyan] flex justify-center items-center rounded mx-auto w-[320px] mt-6">
                    <span className="text-black font-bold text-2xl border-white">
                        <BsStar color="cyan" />
                    </span>
                    GPT search results may not be upto date!
                </div>
            }
            <div className={`flex justify-center items-center ${searchType === 'search' ? 'pt-8' : 'pt-[4px]'}`}>
                
                <form 
                    onSubmit={(e) => e.preventDefault()}
                    className="w-[95%] md:w-2/3 md:max-w-[800px] bg-black grid grid-cols-12 rounded-md  text-sm md:text-[16px]">
                    <input 
                        ref={searchText}
                        type="text" 
                        placeholder={lang[langKey].placeholder} 
                        className="p-2 md:p-[12px] m-4 col-span-9 rounded-md bg-[rgb(51,51,51)] text-white"    
                        />
                    {
                        isLoading ? (
                            <div className="col-span-3 mx-4 flex items-center justify-center">
                                <Triangle
                                    height="70"
                                    width="70"
                                    color="#b91c1c"
                                    ariaLabel="triangle-loading"
                                    visible={true}
                                /> 
                            </div>
                        ) : (
                            <button
                                onClick={searchHander}
                                className="col-span-3 m-4  text-white   bg-red-700 rounded-md  hover:bg-red-500"
                            >
                                {lang[langKey].search}
                            </button>
                        )
                    }
                </form>
            
            </div>
        </div>
    );
}

export default GptSearchBar;