import React  from "react";

const VideoTitle = ({title, overview}) => {
    return (
        <div className="pt-[40%] pl-6 w-screen aspect-video md:pt-[20%] md:px-12 absolute text-white bg-gradient-to-r from-gray-950">
            <h1 className="text-lg md:text-4xl font-bold -mt-[6rem] md:m-0">{title}</h1>
            <p className="hidden md:inline-block  md:text-[100%] md:py-6 md:w-[70%] sm:max-w-[60%]">{overview}</p>
            <div className="mt-[4px] md:m-0">
                <button 
                    className="bg-white text-black md:p-[.25rem] md:px-[1.3rem] p-[.15rem] px-[.85rem] rounded-[3px] hover:bg-opacity-80 md:text-md text-sm">
                    Play
                </button>
                <button
                    className="hidden md:inline-block bg-gray-300 text-white p-[0.30rem] px-[0.8rem] mx-2 bg-opacity-30 rounded-[3px] hover:bg-opacity-20"
                    >
                    More Info
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;