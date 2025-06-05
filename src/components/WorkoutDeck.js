import React, { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
import workoutsData from "../data/workouts.json";

function WorkoutDeck() {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("completed");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [completed]);

  const handleComplete = name => {
    if (!completed.includes(name)) {
      setCompleted([...completed, name]);
    }
  };

  return (
    <div>
      {workoutsData.map(w => (
        <FlipCard key={w.name} workout={w} onComplete={handleComplete} />
      ))}
    </div>
  );
}

export default WorkoutDeck;
