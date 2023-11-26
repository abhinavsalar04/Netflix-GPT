import { useSelector } from "react-redux";
import { NETFLIX_BG } from "../../utils/constants";
import Footer from "../Footer";
import Header from "../Header";
import GptMoviesSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    const isGptSearchClicked = useSelector((store) => store.gpt.isGptSearchClicked);
    console.log("GptSearchPage component!");
    return (
        <div>
             <div className="fixed -z-20 m-0">
                <img className="h-screen object-cover md:w-screen" src={NETFLIX_BG} alt="background" />
            </div>
            <div className="relative flex flex-col">
                <Header />
                <GptSearchBar />
                <GptMoviesSuggestions />
                <div className=" bottom-0  w-full"><Footer /></div>
            </div>
            
        </div>
    );
}

export default GptSearchPage;