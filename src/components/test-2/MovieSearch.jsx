import { useState } from "react";
import movieData from "../../movies.json";

export default function MovieSearch() {
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by title, Director, Genre or Actor"
          onChange={(e) => {
            console.log(e.target.value);
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
            return (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>{movie.cast}</td>
                <td>{movie.ratings.iMDB}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
