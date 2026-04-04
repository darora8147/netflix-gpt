import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gptSearchResult = useSelector((store) => store.gpt);
  const { moviesName, moviesResult } = gptSearchResult;
  
  if(!moviesName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {moviesName.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={moviesResult[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
