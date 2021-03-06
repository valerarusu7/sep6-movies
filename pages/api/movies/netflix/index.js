import requests from "../../../../requests/requests";
import axios from "../../../../requests/TMDB_axios";

export default async function romance_movies(req, res) {
  if ((req.method = "GET")) {
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const movies = [];
    let data = {};
    const moviesRequest = await axios.get(
      requests.tmdb_requests.fetchNetflixOriginals
    );
    moviesRequest.data.results.map((movie) => {
      const movieObject = {
        id: movie.id,
        poster_path: imageUrl + movie.poster_path,
        title: movie.original_name,
      };
      movies.push(movieObject);
    });
    data = { netflix: movies };
    res.status(200).json(data);
  } else {
    res.status(404).json("Bad Request");
  }
}
