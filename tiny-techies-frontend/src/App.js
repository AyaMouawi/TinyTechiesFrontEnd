import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import SingleCoursePage from "./Components/SingleCoursePage"
import CoursesPage from "./Components/CoursesPage"
import MyCoursesPage from "./Components/MyCoursesPage"
import TrainerDashboard from "./Components/TrainerDashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SingleCoursePage/:CourseId" element={<SingleCoursePage />} />
      <Route path="/CoursesPage" element={<CoursesPage />} />
      <Route path="/MyCoursesPage" element={<MyCoursesPage />} />
      <Route path="/TrainerDashboard" element={<TrainerDashboard />} />
    </Routes>
  );
}

export default App;