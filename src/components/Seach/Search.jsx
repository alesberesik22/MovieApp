import React from "react";
import { useState } from "react";

import { ResultCard } from "../Resultcard/ResultCard";

import "./Search.css";

function Search() {
  const [query, setQuery] = useState("");
  const API = "ad6aa82bc5885a29cef46d209ca93674";
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&page=1&include_adult=true&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a film ?"
          value={query}
          onChange={onChange}
        />
      </div>
      {results.length > 0 && (
        <ul className="results">
          {results.map((movie) => (
            <li key={movie.id}>
              <ResultCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
