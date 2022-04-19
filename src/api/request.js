//const API_KEY = ad6aa82bc5885a29cef46d209ca93674;

const requests = {
  fetchTrending:
    "/trending/all/week?api_key=ad6aa82bc5885a29cef46d209ca93674&language=en-US",
  fetchNetflixOriginals: `/discover/tv?api_key=ad6aa82bc5885a29cef46d209ca93674&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=ad6aa82bc5885a29cef46d209ca93674&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=ad6aa82bc5885a29cef46d209ca93674&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=ad6aa82bc5885a29cef46d209ca93674&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=ad6aa82bc5885a29cef46d209ca93674&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=ad6aa82bc5885a29cef46d209ca93674&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=ad6aa82bc5885a29cef46d209ca93674&with_genres=99`,
};

export default requests;
