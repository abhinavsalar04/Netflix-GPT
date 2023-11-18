const GptSearchBar = () => {
    return (
        <div className="pt-36 flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12 rounded-md min-w-[500px]">
                <input 
                    type="text" 
                    placeholder="What do you want to watch today?" 
                    className="p-4 m-4 col-span-9 rounded-md bg-[rgb(51,51,51)]"    
                    />
                <button
                    className="col-span-3 m-4  bg-white text-[rgb(229,21,9)] bg-opacity-10 rounded-md"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default GptSearchBar;