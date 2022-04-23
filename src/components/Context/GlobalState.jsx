import React from "react";
import { createContext, useReducer, useEffect } from "react";

import AppReducer from "./AppReducer";
import startDatabase from "../Firebase/firebase-config";
import { child, get, ref, remove, set, update } from "firebase/database";

// initial state
const initialState = {
  watchlist: [],
  watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provide components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // const watchListRef = firebase.database().ref("watchlist");
    const watchListRef = startDatabase();
    const addMovie = JSON.stringify(state.watchlist);
    if (state.watchlist.length > 0) {
      set(ref(watchListRef, "watchList/" + state.watchlist.length), {
        watchlist: addMovie,
      });
    }
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
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
