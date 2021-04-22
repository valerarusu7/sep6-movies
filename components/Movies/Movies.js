import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActionMovies,
  getComedyMovies,
  getDocumentariesMovies,
  getHorrorMovies,
  getNetflixMovies,
  getRomanceMovies,
  getTopRatedMovies,
  getTrendingMovies,
  moviesSetLoading,
} from "../../store/reducers/moviesReducer";
import MoviesCategory from "./MoviesCategory";

const Movies = ({}) => {
  const {
    netflixOriginalsMovies,
    topRatedMovies,
    trendingMovies,
    actionMovies,
    comedyMovies,
    horrorMovies,
    documentariesMovies,
    romanceMovies,
    loading,
  } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesSetLoading(true));
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getNetflixMovies());
    dispatch(getActionMovies());
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getDocumentariesMovies());
    dispatch(moviesSetLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <MoviesCategory movies={trendingMovies} categoryTitle={"Trending"} />
          <MoviesCategory movies={topRatedMovies} categoryTitle={"Top Rated"} />
          <MoviesCategory
            movies={netflixOriginalsMovies}
            categoryTitle={"Netflix Originals"}
          />
          <MoviesCategory movies={actionMovies} categoryTitle={"Action"} />
          <MoviesCategory movies={comedyMovies} categoryTitle={"Comedy"} />
          <MoviesCategory movies={horrorMovies} categoryTitle={"Horror"} />
          <MoviesCategory movies={romanceMovies} categoryTitle={"Romance"} />
          <MoviesCategory
            movies={documentariesMovies}
            categoryTitle={"Documentaries"}
          />
        </div>
      )}
    </div>
  );
};

export default Movies;
