import { useState } from "react";
import movieData from "../../movies.json";

export default function MovieSearch() {
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          placeholder="Search movie"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Cast</th>
            <th>Average Rating</th>
          </tr>
          {movieData.map((movie) => {
            const titleInput = movie.title
              .toLowerCase()
              .includes(input.toLowerCase());

            const directorInput = movie.director
              .toLowerCase()
              .includes(input.toLowerCase());

            const genreInput = movie.genre
              .toLowerCase()
              .includes(input.toLowerCase());

            const yearInput = movie.year
              .toString()
              .includes(input.toLowerCase());

            const castInput = movie.cast.some((actor) => {
              actor.toLowerCase().includes(input.toLowerCase());
            });

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
                <tr key={movie.title}>
                  <td>{movie.title}</td>
                  <td>{movie.director}</td>
                  <td>{movie.year}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.cast.join(", ")}</td>
                  <td>{averageRating}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
