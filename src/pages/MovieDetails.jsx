import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import '../css/MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(id);
        setMovie(details);
        // Set the first trailer as the selected video
        const trailer = details.videos.find(video => 
          video.type === 'Trailer' && video.site === 'YouTube'
        );
        setSelectedVideo(trailer || details.videos[0]);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!movie) {
    return <div className="error">Movie not found</div>;
  }

  const trailers = movie.videos.filter(video => 
    video.site === 'YouTube' && (video.type === 'Trailer' || video.type === 'Teaser')
  );

  return (
    <div className="movie-details">
      <div className="movie-hero">
        <img 
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="backdrop"
        />
        <div className="movie-hero-content">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="poster"
          />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <div className="meta">
              <span className="rating">★ {movie.vote_average.toFixed(1)}</span>
              <span className="year">{movie.release_date?.split('-')[0]}</span>
              <span className="runtime">{movie.runtime} min</span>
            </div>
            <p className="overview">{movie.overview}</p>
          </div>
        </div>
      </div>

      {trailers.length > 0 && (
        <div className="trailer-section">
          <h2>Trailers & Teasers</h2>
          <div className="video-selector">
            {trailers.map(video => (
              <button
                key={video.key}
                className={`video-button ${selectedVideo?.key === video.key ? 'active' : ''}`}
                onClick={() => setSelectedVideo(video)}
              >
                {video.name}
              </button>
            ))}
          </div>
          {selectedVideo && (
            <div className="trailer-container">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.key}?autoplay=0`}
                title={selectedVideo.name}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          )}
        </div>
      )}

      <div className="cast-section">
        <h2>Cast</h2>
        <div className="cast-grid">
          {movie.credits.cast.slice(0, 8).map(actor => (
            <div key={actor.id} className="cast-card">
              <img
                src={actor.profile_path 
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : 'https://via.placeholder.com/185x278'}
                alt={actor.name}
              />
              <div className="cast-info">
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;