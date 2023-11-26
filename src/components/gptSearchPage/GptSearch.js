import { NETFLIX_BG } from "../../utils/constants";
import Footer from "../Footer";
import GptMoviesSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <>
            <div className="fixed -z-20 m-0">
                <img className="h-screen object-cover md:w-screen" src={NETFLIX_BG} alt="background" />
            </div>
            <div>
                <GptSearchBar />
                <GptMoviesSuggestions />
                
            </div>
            {/* <div className="absolute bottom-0 w-full"><Footer /></div> */}
        </>
    );
}

export default GptSearch;