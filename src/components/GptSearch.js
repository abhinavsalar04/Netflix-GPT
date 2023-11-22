import { NETFLIX_BG } from "../utils/constants";
import GptMoviesSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <>
            <div className="fixed -z-20">
                <img className="h-screen object-cover md:w-screen" src={NETFLIX_BG} alt="background" />
            </div>
            <div>
                <GptSearchBar />
                <GptMoviesSuggestions />
            </div>
        </>
    );
}

export default GptSearch;