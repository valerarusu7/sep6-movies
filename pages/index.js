import axios from "axios";
import Head from "next/head";
import MoviesCategory from "../components/Movies/MoviesCategory";
import { server } from "../config";
import requests from "../requests/requests";

function Home({
  netflix,
  topRated,
  comedy,
  action,
  documentaries,
  horror,
  romance,
  trending,
}) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <MoviesCategory movies={trending || []} categoryTitle={"Trending"} />
        <MoviesCategory movies={topRated || []} categoryTitle={"Top Rated"} />
        <MoviesCategory
          movies={netflix || []}
          categoryTitle={"Netflix Originals"}
        />
        <MoviesCategory movies={action || []} categoryTitle={"Action"} />
        <MoviesCategory movies={comedy || []} categoryTitle={"Comedy"} />
        <MoviesCategory movies={horror || []} categoryTitle={"Horror"} />
        <MoviesCategory movies={romance || []} categoryTitle={"Romance"} />
        <MoviesCategory
          movies={documentaries}
          categoryTitle={"Documentaries"}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const movies = [];
    const moviesRequest = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=e453502d7e2f31ded447961d9d1f121c&with_networks=213`
    );
    const data = await moviesRequest.json();

    data.results.map((movie) => {
      const movieObject = {
        id: movie.id,
        poster_path: imageUrl + movie.poster_path,
        title: movie.original_name,
      };
      movies.push(movieObject);
    });

    const trendingRequest = await axios.get(
      `${server}${requests.server_requests.trending}`
    );
    const romanceRequest = await axios.get(
      `${server}${requests.server_requests.romance}`
    );
    const actionRequest = await axios.get(
      `${server}${requests.server_requests.action}`
    );
    const documentariesRequest = await axios.get(
      `${server}${requests.server_requests.documentaries}`
    );
    const horrorRequest = await axios.get(
      `${server}${requests.server_requests.horror}`
    );
    const topRatedRequest = await axios.get(
      `${server}${requests.server_requests.topRated}`
    );
    const comedyRequest = await axios.get(
      `${server}${requests.server_requests.comedy}`
    );
    return {
      props: {
        // netflix: netflixRequest.data.netflix,
        netflix: movies,
        trending: trendingRequest.data.trending,
        romance: romanceRequest.data.romance,
        action: actionRequest.data.action,
        documentaries: documentariesRequest.data.documentaries,
        horror: horrorRequest.data.horror,
        topRated: topRatedRequest.data.top_rated,
        comedy: comedyRequest.data.comedy,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Home;
