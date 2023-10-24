import React from "react";
import "../TrainerDashCSS/TrainerDashcourse.css";
import TrainerDashCourses from "./TrainerDashCourses";
const TrainerDashCoursesPage = () => {
  return (
  <div className="TrainerDashMainContainer">
    <div className="TrainerDashCoursesContainer">
    <TrainerDashCourses />
    <TrainerDashCourses />
    <TrainerDashCourses />
    <TrainerDashCourses />
    <TrainerDashCourses />
  
    </div>
    </div>
  );
};

export default TrainerDashCoursesPage;
