import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.components";
import ExercisesList from "./components/exercises-list.components";
import EditExercise from "./components/edit-exercise.components";
import CreateExercise from "./components/create-exercise.components";
import CreateUser from "./components/create-user.components";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path={"/"} exact element={<ExercisesList />} />
          <Route path={"/edit/:id?"} element={<EditExercise />} />
          <Route path={"/create"} element={<CreateExercise />} />
          <Route path={"/user"} element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
