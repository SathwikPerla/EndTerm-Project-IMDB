import "../css/Watchlist.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Watchlist() {
  const { watchlist } = useMovieContext();

  if (watchlist.length === 0) {
    return (
      <div className="watchlist-empty">
        <h2>Your Watchlist is Empty</h2>
        <p>Add movies you want to watch later and they will appear here!</p>
      </div>
    );
  }

  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      <div className="movies-grid">
        {watchlist.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Watchlist;