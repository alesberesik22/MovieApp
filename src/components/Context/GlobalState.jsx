import React, { useState } from "react";
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: axios
    .get(
      "https://9eg450gz8l.execute-api.eu-central-1.amazonaws.com/prod/watchlist?list=watchlist"
    )
    .then((response) => {
      // console.log(JSON.parse(response.data.all));
      return JSON.parse(response.data.all);
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    }),
  watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provide components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [addedToWatchList, setAddedToWatchList] = useState(false);

  //initialState of lists
  useEffect(() => {
    // axios
    //   .get(
    //     "https://9eg450gz8l.execute-api.eu-central-1.amazonaws.com/prod/watchlist?list=watchlist"
    //   )
    //   .then((response) => {
    //     console.log("response", JSON.parse(response.data.all));
    //     dispatch({
    //       type: "ADD_MOVIE_TO_WATCHLIST",
    //       payload: JSON.parse(response.data.all),
    //     });
    //   });
  }, []); //just on initial state

  useEffect(() => {
    console.log("Watchlist2", state.watchlist);
    // const watchListRef = firebase.database().ref("watchlist");
    // const watchListRef = startDatabase();
    const addMovie = JSON.stringify(state.watchlist);
    const watchedAddMovie = JSON.stringify(state.watched);
    // if (state.watchlist.length > 0) {
    //   set(ref(watchListRef, "watchList/" + state.watchlist.length), {
    //     watchlist: addMovie,
    //   });
    // }
    const putData = {
      list: "watchlist",
      all: addMovie,
    };
    const putDataWatched = {
      list: "watchedlist",
      all: watchedAddMovie,
    };
    // if (state.watchlist.length > 0) {
    //   axios
    //     .post(
    //       "https://9eg450gz8l.execute-api.eu-central-1.amazonaws.com/prod/watchlist",
    //       putData
    //     )
    //     .then((response) => {
    //       console.log(response);
    //     });
    // }
    // if (state.watched.length > 0) {
    //   axios
    //     .post(
    //       "https://9eg450gz8l.execute-api.eu-central-1.amazonaws.com/prod/watched",
    //       putDataWatched
    //     )
    //     .then((response) => {
    //       console.log(response);
    //     });
    // }
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    setAddedToWatchList(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
