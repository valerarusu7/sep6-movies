import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/reducers/authReducer";
import { getNetflixMovies } from "../store/reducers/moviesReducer";

const Movies = ({}) => {
  const { user } = useSelector((state) => state.auth);
  const { netflixOriginalsMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNetflixMovies());
  }, []);

  {
    console.log(netflixOriginalsMovies);
  }
  return (
    <div>
      {netflixOriginalsMovies !== null ? (
        <div>
          {netflixOriginalsMovies.map((movie) => {
            return <div key={movie.title}>{movie.title}</div>;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Movies;
