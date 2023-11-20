import { NETFLIX_BG } from "../utils/constants";
import GptMoviesSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-20">
                <img className="w-screen h-screen min-h-screen" src={NETFLIX_BG} alt="background" />
            </div>
            <GptSearchBar />
            <GptMoviesSuggestions />
        </div>
    );
}

export default GptSearch;