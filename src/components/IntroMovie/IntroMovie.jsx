import React, { useEffect, useState } from "react";
import axios from "../../api/api";
import requests from "../../api/request";
import "./IntroMovie.css";

function IntroMovie() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
    console.log(movie);
  }, []);

  function truncate(str, n) {
    if (str.length > n) {
      return str.substr(0, n - 1) + "...";
    } else {
      return str;
    }
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(\"https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backdropPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {/* {movie.title || movie.name || movie.original_name} */}
          {movie.title
            ? movie.title
            : movie.name
            ? movie.name
            : movie.original_name
            ? movie.original_name
            : ""}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List </button>
        </div>
        <h1 className="banner_description">
          {truncate(String(movie.overview), 500)}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default IntroMovie;
