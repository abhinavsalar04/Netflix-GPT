
import { useState } from "react";
import { NETFLIX_BG } from "../../utils/constants";
import Footer from "../Footer";
import Header from "../Header";
import GptMoviesSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import ShowSearchedMovies from "./ShowSearchedMovies";

const GptSearchPage = () => {
    const [searchType, setSearchType] = useState("search");
    return (
        <div>
             <div className="fixed -z-20 m-0">
                <img className="h-screen object-cover md:w-screen" src={NETFLIX_BG} alt="background" />
            </div>
            <div className="relative flex flex-col">
                <Header opacity={70}/>
                <GptSearchBar searchType={searchType} setSearchType={setSearchType}/>
                {
                    searchType === 'search' ? (
                        <ShowSearchedMovies />
                    ) : (
                        <GptMoviesSuggestions />
                    )
                } 
                <div className="md:mt-6 lg:mt-6 mt-20 bottom-0  w-full"><Footer /></div>
            </div>
            
        </div>
    );
}

export default GptSearchPage;