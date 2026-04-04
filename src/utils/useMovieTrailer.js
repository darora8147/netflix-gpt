import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./constant";
import { addTrailerVideo } from "./moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movies.trailerVideo);

  const getMoviesVideo = async () => {
    const videos = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const json = await videos.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
