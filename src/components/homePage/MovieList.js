import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    if(!movies) return;

    // console.log("Movie List",movies[0]); 


    return (
        <div className="">
            <h1 className="text-[16px] md:text-lg py-4 -mb-2 mt-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex ">
                    {
                        movies.results?.map((movie) => (
                            <MovieCard key={movie.id} movieId={movie.id} poster_path={movie?.poster_path}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieList;