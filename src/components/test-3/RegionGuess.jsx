import React, { useEffect, useState } from "react";
import { regions } from "./regions";
import "./regionGuess.css";

export default function RegionGuess() {
  const [answer, setAnswer] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [regionCount, setRegionCount] = useState(0);
  const [giveup, setGiveup] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (!answer || isDisabled) return;

    const regex = new RegExp(`^${answer}$`, "i");

    regions.forEach((region) => {
      if (
        regex.test(region) &&
        !correctAnswers.some((answer) => regex.test(answer))
      ) {
        setRegionCount((count) => count + 1);
        setCorrectAnswers((answers) => {
          const newAnswers = [...answers];
          const newRegions = regions.filter((region) => regex.test(region));
          newAnswers.push(newRegions[0]);

          if (newAnswers.length === 50)
            newAnswers.push("\n\nCongratulations, you named all 50 Regions!");
          return newAnswers;
        });
        setAnswer("");
      }
    });
  }, [answer]);

  useEffect(() => {
    if (timer <= 0) {
      setIsDisabled(true);
      return;
    }
    const time = setTimeout(() => setTimer(timer - 1), 1000);

    return () => clearTimeout(time);
  }, [timer]);

  return (
    <div className="container">
      <div className="answer-content">
        <label htmlFor="answerInput">Guess here:</label>
        <input
          id="answerInput"
          type="text"
          value={answer}
          placeholder="Guess a region"
          onChange={(e) => setAnswer(e.target.value)}
          disabled={isDisabled}
        ></input>
      </div>
      <div>
        <p>Total: {regionCount} / 50</p>
        <p>Time left: {timer} s</p>
      </div>
      <div className="correct-answer-content">
        <textarea
          cols="70"
          rows="20"
          value={correctAnswers.join(", ")}
          placeholder="Your correct answers..."
          disabled
        ></textarea>
      </div>
      <div className="restart-content">
        <button
          className="restart-btn"
          onClick={() => {
            setAnswer("");
            setCorrectAnswers([]);
            setRegionCount(0);
            setTimer(60);
            setIsDisabled(false);
          }}
        >
          Restart
        </button>
        <button
          className="give-up-btn"
          onClick={() => {
            setGiveup(true);
            setTimer(0);
            regions.forEach((region, index) => {
              if (!correctAnswers.includes(region)) {
                setCorrectAnswers((answers) => {
                  const newAnswers = [...answers];
                  newAnswers.push(region);

                  if (index === 49) newAnswers.push("\n\nMaybe next time!");

                  return newAnswers;
                });
              }
            });
          }}
        >
          Give up?
        </button>
      </div>
    </div>
  );
}
