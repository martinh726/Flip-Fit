import React, { useState } from "react";
import "./FlipCard.css";
import Timer from "./Timer";

function FlipCard({ workout, onComplete }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleTimerFinish = () => {
    setShowTimer(false);
    onComplete && onComplete(workout.name);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="front">
          <section id="text">Click to Reveal Exercise</section>
        </div>
        <div className="back">
          <section id="workout">
            <p>
              {workout.name} <br />
              {workout.reps}
            </p>
            <figure>
              <img src={workout.image} alt={`${workout.name} gif`} />
            </figure>
            {showTimer ? (
              <Timer seconds={30} onFinish={handleTimerFinish} />
            ) : (
              <input
                type="button"
                value="Add Timer"
                id="timer-button"
                onClick={e => {
                  e.stopPropagation();
                  setShowTimer(true);
                }}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
