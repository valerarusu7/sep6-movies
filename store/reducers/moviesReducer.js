import { createSlice } from "@reduxjs/toolkit";
import axios from "../../pages/api/axios";
import { auth, provider } from "../../firebase/firebase";
import requests from "../../pages/api/requests";

/************** STATE **************/
const initialState = {
  documentariesMovies: null, // Indicates the documentaries movies data
  trendingMovies: null, // Indicates the trending movies data
  netflixOriginalsMovies: null, // Indicates the netflix movies data
  topRatedMovies: null, // Indicates the top rated movies data
  actionMovies: null, // Indicates the action movies data
  comedyMovies: null, // Indicates the comedy movies data
  horrorMovies: null, // Indicates the horror movies data
  romanceMovies: null, // Indicates the romance movies data
  loading: false, // Indicates the loading state
};

/************** STATE SLICE **************/
const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    moviesSetDocumentariesMovies(state, action) {
      state.documentariesMovies = action.payload;
    },
    moviesSetTrendingMovies(state, action) {
      state.trendingMovies = action.payload;
    },
    moviesSetNetflixMovies(state, action) {
      state.netflixOriginalsMovies = action.payload;
    },
    moviesSetTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    moviesSetActionMovies(state, action) {
      state.actionMovies = action.payload;
    },
    moviesSetComedyMovies(state, action) {
      state.comedyMovies = action.payload;
    },
    moviesSetHorrorMovies(state, action) {
      state.horrorMovies = action.payload;
    },
    moviesSetRomanceMovies(state, action) {
      state.romanceMovies = action.payload;
    },
    moviesSetLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default moviesSlice.reducer;
export const {
  moviesSetDocumentariesMovies,
  moviesSetTrendingMovies,
  moviesSetNetflixMovies,
  moviesSetTopRatedMovies,
  moviesSetActionMovies,
  moviesSetComedyMovies,
  moviesSetHorrorMovies,
  moviesSetRomanceMovies,
  moviesSetLoading,
} = moviesSlice.actions;

/************** THUNKS **************/
export const getTrendingMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.server_requests.trending)
      .then((result) => {
        dispatch(moviesSetTrendingMovies(result.data.trending));
      })
      .catch((error) => console.log(error));
  };
};

export const getTopRatedMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.server_requests.topRated)
      .then((result) => {
        dispatch(moviesSetTopRatedMovies(result.data.top_rated));
      })
      .catch((error) => console.log(error));
  };
};

export const getNetflixMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.server_requests.netflix)
      .then((result) => {
        dispatch(moviesSetNetflixMovies(result.data.netflix));
      })
      .catch((error) => console.log(error));
  };
};

export const getActionMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.server_requests.action)
      .then((result) => {
        dispatch(moviesSetActionMovies(result.data.action));
      })
      .catch((error) => console.log(error));
  };
};

export const getComedyMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.server_requests.comedy)
      .then((result) => {
        dispatch(moviesSetComedyMovies(result.data.comedy));
      })
      .catch((error) => console.log(error));
  };
};

export const getRomanceMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.server_requests.romance)
      .then((result) => {
        dispatch(moviesSetRomanceMovies(result.data.romance));
      })
      .catch((error) => console.log(error));
  };
};

export const getHorrorMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.server_requests.horror)
      .then((result) => {
        dispatch(moviesSetHorrorMovies(result.data.horror));
      })
      .catch((error) => console.log(error));
  };
};

export const getDocumentariesMovies = () => {
  return (dispatch) => {
    axios
      .get(requests.server_requests.documentaries)
      .then((result) => {
        dispatch(moviesSetDocumentariesMovies(result.data.documentaries));
      })
      .catch((error) => console.log(error));
  };
};
