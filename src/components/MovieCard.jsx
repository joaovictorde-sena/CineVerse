import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./MovieCard.css";

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={imageUrl + movie.poster_path}
          alt={movie.title}
        />
      </div>
      <div className="movie-infos">
        <h2 className="movie-title">{movie.title}</h2>

        {movie.vote_average > 0 && (
          <div className="rating">
            <FaStar color="#f5c518" /> {movie.vote_average.toFixed(1)}
          </div>
        )}

        <div className="hidden-content">
          {movie.overview && (
            <p className="description">
              {movie.overview.length > 100
                ? `${movie.overview.substring(0, 100)}...`
                : movie.overview}
            </p>
          )}
          
          {showLink && (
            <Link to={`/movie/${movie.id}`} className="btn-default">
              {movie.overview ? "Ver mais" : "Detalhes"}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard