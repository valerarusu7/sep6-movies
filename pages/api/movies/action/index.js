import requests from "../../requests";
import axios from "../../TMDB_axios";

export default async function action_movies(req, res) {
  if ((req.method = "GET")) {
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const movies = [];
    let data = {};
    const moviesRequest = await axios.get(
      requests.tmdb_requests.fetchActionMovies
    );
    moviesRequest.data.results.map((movie) => {
      const movieObject = {
        id: movie.id,
        name: movie.title,
        poster_path: imageUrl + movie.poster_path,
      };
      movies.push(movieObject);
    });
    data = { action: movies };
    res.status(200).json(data);
  } else {
    res.status(404).json("Bad Request");
  }
}
