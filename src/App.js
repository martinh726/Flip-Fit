import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WorkoutDeck from "./components/WorkoutDeck";
import Progress from "./components/Progress";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/progress">Progress</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WorkoutDeck />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
