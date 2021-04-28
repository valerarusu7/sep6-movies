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
          movies={documentaries || []}
          categoryTitle={"Documentaries"}
        />
      </div>
    </div>
  );
}

export default Home;
