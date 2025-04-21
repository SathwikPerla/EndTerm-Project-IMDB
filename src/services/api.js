const API_KEY = "bb474609d7fd3708b56341f87a6c58d0";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const [movieDetails, credits, videos] = await Promise.all([
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`).then(res => res.json()),
    fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`).then(res => res.json()),
    fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`).then(res => res.json())
  ]);

  return {
    ...movieDetails,
    credits,
    videos: videos.results
  };
};