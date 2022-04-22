import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import requests from "./api/request";
import Nav from "./components/Navbar/Nav";
import IntroMovie from "./components/IntroMovie/IntroMovie";
import MovieGenres from "./components/MovieGenres/MovieGenres";
import Watched from "./components/Watched/Watched";
import Watchlist from "./components/Watchlist/Watchlist";
import { GlobalProvider } from "./components/Context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <div className="App">
                <IntroMovie />
                <MovieGenres
                  isLargeRow={true}
                  title="NETFLIX ORIGINALS"
                  fetchUrl={requests.fetchNetflixOriginals}
                />

                <MovieGenres
                  title="Trending Now"
                  fetchUrl={requests.fetchTrending}
                />
                <MovieGenres
                  title="Top Rated"
                  fetchUrl={requests.fetchTopRated}
                />
                <MovieGenres
                  title="Action Movies"
                  fetchUrl={requests.fetchActionMovies}
                />
                <MovieGenres
                  title="Comedy Movies"
                  fetchUrl={requests.fetchComedyMovies}
                />
                <MovieGenres
                  title="Horror Movies"
                  fetchUrl={requests.fetchHorrorMovies}
                />
                <MovieGenres
                  title="Romance Movies"
                  fetchUrl={requests.fetchRomanceMovies}
                />
                <MovieGenres
                  title="Documentaries"
                  fetchUrl={requests.fetchDocumentaries}
                />
              </div>
            </Route>
            <Route path="/watched" exact component={Watched} />
            <Route path="/watchlist" exact component={Watchlist} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
