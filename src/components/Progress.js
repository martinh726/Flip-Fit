import React from "react";

function Progress() {
  const completed = JSON.parse(localStorage.getItem("completed") || "[]");
  if (completed.length === 0) {
    return <p>No workouts completed yet.</p>;
  }
  return (
    <div>
      <h2>Completed Workouts</h2>
      <ul>
        {completed.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Progress;
