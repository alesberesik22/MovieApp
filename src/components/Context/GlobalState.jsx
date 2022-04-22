import React from "react";
import { createContext, useReducer, useEffect } from "react";

import AppReducer from "./AppReducer";
import { db } from "../Firebase/firebase-config";
import { Database } from "firebase/database";

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
    const watchListRef = firebase.database().ref("watchlist");
    const addMovie = JSON.stringify(state.watchlist);

    watchListRef.push(addMovie);
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
