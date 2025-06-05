import React, { useState } from "react";
import "./FlipCard.css";

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
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
              Push-ups <br />4 X 20
            </p>
            <figure>
              <img src="/imgs/pushup-1462808858.gif" alt="pushups-gif" />
            </figure>
            <input
              type="button"
              value="Add Timer"
              id="timer-button"
              onClick={(e) => e.stopPropagation()}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
