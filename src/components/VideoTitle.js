import React  from "react";

const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-gray-950">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-md py-6 w-2/5">{overview}</p>
            <div>
                <button 
                    className="bg-white text-black p-[.25rem] px-[1.3rem] rounded-[3px] hover:bg-opacity-80">
                    Play
                </button>
                <button
                    className="bg-gray-300 text-white p-[0.30rem] px-[0.8rem] mx-2 bg-opacity-30 rounded-[3px] hover:bg-opacity-20"
                    >
                    More Info
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;