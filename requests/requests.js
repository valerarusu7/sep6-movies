const API_KEY = process.env.TMDB_API_KEY;

const tmdb_requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const server_requests = {
  trending: "/api/movies/trending",
  netflix: "/api/movies/netflix",
  topRated: "/api/movies/top_rated",
  action: "/api/movies/action",
  comedy: "/api/movies/comedy",
  horror: "/api/movies/horror",
  romance: "/api/movies/romance",
  documentaries: "/api/movies/documentaries",
};

export default { tmdb_requests, server_requests };
