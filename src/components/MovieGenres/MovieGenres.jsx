import React, { useState, useEffect } from "react";
import axios from "../../api/api";
import "./MovieGenres.css";
import Youtube from "react-youtube";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function MovieGenres({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // Options for react-youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl !== "") {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=ad6aa82bc5885a29cef46d209ca93674`
      );
      console.log(trailerurl.data.results[0].key);
      setTrailerUrl(trailerurl.data.results[0].key);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path !== null && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${baseImgUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      <Youtube videoId="2g811Eo7K8U" opts={opts} /> */}
    </div>
  );
}

export default MovieGenres;
