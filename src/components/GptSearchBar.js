import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    return (
        <div className="pt-36 flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 rounded-md min-w-[500px]">
                <input 
                    type="text" 
                    placeholder={lang[langKey].placeholder} 
                    className="p-[10px] m-4 col-span-9 rounded-md bg-[rgb(51,51,51)]"    
                    />
                <button
                    className="col-span-3 m-4  text-gray-300 font-bold bg-[rgb(229,21,9)] bg-opacity-80 rounded-md"
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
}

export default GptSearchBar;