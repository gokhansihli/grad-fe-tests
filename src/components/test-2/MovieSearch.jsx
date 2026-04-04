import { useEffect, useState } from "react";
import movieData from "../../movies.json";
import LoadingDots from "./LoadingDots";
import "./movieSearch.css";

export default function MovieSearch() {
  const [input, setInput] = useState("");
  const [inputDelay, setInputDelay] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setInputDelay(input);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="main-content">
      <h1>Movie List Filter</h1>
      <div className="movie-search">
        <input
          className="input"
          type="text"
          value={input}
          placeholder="Search by Title, Director, Genre, Year or Cast"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>

      {loading && <LoadingDots />}

      <div className="movie-content">
        {!loading &&
          movieData.map((movie) => {
            const titleInput = movie.title
              .toLowerCase()
              .includes(inputDelay.toLowerCase());

            const directorInput = movie.director
              .toLowerCase()
              .includes(inputDelay.toLowerCase());

            const genreInput = movie.genre
              .toLowerCase()
              .includes(inputDelay.toLowerCase());

            const yearInput = movie.year
              .toString()
              .includes(inputDelay.toLowerCase());

            const castInput = movie.cast.some((actor) =>
              actor.toLowerCase().includes(inputDelay.toLowerCase()),
            );

            const ratings = Object.values(movie.ratings).flat();
            ratings[0] *= 10;
            const averageRating = (
              ratings.reduce((sum, val) => sum + val, 0) / ratings.length
            ).toFixed(2);

            if (
              titleInput ||
              directorInput ||
              genreInput ||
              yearInput ||
              castInput
            ) {
              return (
                <div className="movie-card" key={movie.title}>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="movie-img"
                  />
                  <div className="movie-info">
                    <h4>{movie.title}</h4>
                    <p>
                      {movie.year} • {movie.genre}
                    </p>
                    <p>&#9733; {averageRating}</p>
                    <p>
                      <span>Director:</span> {movie.director}
                    </p>
                    <p>
                      <span>Cast:</span> {movie.cast.join(", ")}
                    </p>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
