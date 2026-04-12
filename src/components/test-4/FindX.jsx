import { useEffect, useState } from "react";
import "./findX.css";

export default function FindX() {
  const [newGame, setNewGame] = useState([]);
  const [found, setFound] = useState(0);
  const [score, setScore] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);

  let xCoor = Math.floor(Math.random() * 18);
  let yCoor = Math.floor(Math.random() * 7);

  useEffect(() => {
    let game = new Array(7);
    game.fill([]);

    game = game.map((set) => {
      const arr = new Array(18);
      arr.fill(null);
      return arr;
    });
    game[yCoor][xCoor] = "x";
    setNewGame(game);

    if (found === 1) setScore("You have found X 1 time!");
    else setScore(`You have found X ${found} times!`);

    setStartTime(Date.now());
  }, [found]);

  return (
    <div className="content">
      <strong className="score">{score}</strong>
      {bestTime !== null && (
        <h4>Fastest Time: {bestTime.toFixed(2)} seconds</h4>
      )}
      <table className="table-container">
        <tbody>
          {newGame.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row.map((tile, tileIndex) => {
                  if (tile === "x") {
                    return (
                      <td key={tileIndex}>
                        <button
                          className="x"
                          onClick={() => {
                            const endTime = Date.now();
                            const timeTaken = (endTime - startTime) / 1000;

                            setBestTime((prev) => {
                              if (prev === null || timeTaken < prev) {
                                return timeTaken;
                              }

                              return prev;
                            });

                            setFound((num) => num + 1);
                          }}
                        >
                          X
                        </button>
                      </td>
                    );
                  }
                  return <td key={tileIndex}>{tile}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
