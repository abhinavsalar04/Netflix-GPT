import { NETFLIX_BG } from "../utils/constants";
import GptMoviesSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-20">
                <img className="w-screen h-screen" src={NETFLIX_BG} alt="background" />
            </div>
            <GptSearchBar />
            <GptMoviesSuggestions />
        </div>
    );
}

export default GptSearch;