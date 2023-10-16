import React from "react";
import "../css/CoursesSection.css";
import Course from "./Course.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const CoursesSection = () => {
  return (
    <div className="PopularCourses-Wrapper">
    <div className="PopularCourses-Title">
      <div className="TitleLeftCourses">
        <h1>Most Popular Courses</h1>
      </div>
      <div className="TitleRightCourses">
        <h6><a href="/CoursesPage">View all courses -{">"}</a></h6>
      </div>
    </div>
    <div className="Courses">
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  </div>
  );
};

export default CoursesSection;
