import React from "react";

import "./App.css";

import requests from "./api/request";
import Nav from "./components/Navbar/Nav";
import IntroMovie from "./components/IntroMovie/IntroMovie";
import MovieGenres from "./components/MovieGenres/MovieGenres";

function App() {
  return (
    <div className="App">
      <Nav />
      <IntroMovie />
      <MovieGenres
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />

      <MovieGenres title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieGenres title="Top Rated" fetchUrl={requests.fetchTopRated} />
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
  );
}

export default App;
