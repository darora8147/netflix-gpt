import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    console.log('movies', movies)
    return (
        <div className="py-2">
            <h1 className="text-3xl p-2 text-white">{title}</h1>
            <div className="flex hover:overflow-x-scroll">
                <div className="flex">
                    { movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path}/>) }
                </div>
            </div>
        </div>
    )
}

export default MovieList;