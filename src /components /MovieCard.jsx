import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const { 
    isFavorite, 
    addToFavorites, 
    removeFromFavorites,
    isInWatchlist,
    addToWatchlist,
    removeFromWatchlist
  } = useMovieContext();
  
  const favorite = isFavorite(movie.id);
  const watchlisted = isInWatchlist(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  function onWatchlistClick(e) {
    e.preventDefault();
    if (watchlisted) removeFromWatchlist(movie.id);
    else addToWatchlist(movie);
  }

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? 'active' : ''}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
          <button
            className={`watchlist-btn ${watchlisted ? 'active' : ''}`}
            onClick={onWatchlistClick}
          >
            ✚
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
