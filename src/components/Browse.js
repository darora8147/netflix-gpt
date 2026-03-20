import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearchPage /> : <>
          <MainContainer />
          <SecondaryContainer /> 
      </>
      }
    </div>
  );
};

export default Browse;
