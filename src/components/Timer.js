import React, { useState, useEffect } from "react";

function Timer({ seconds, onFinish }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish && onFinish();
      return;
    }
    const id = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft, onFinish]);

  return <div>{timeLeft}s</div>;
}

export default Timer;
