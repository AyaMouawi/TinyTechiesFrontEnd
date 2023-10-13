import React from "react";

import "../css/MyCoursesPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCoursesHero from "./MyCoursesHero";
import Course from "./Course";

const MyCoursesPage = () => {
  return (
   <div className="MyCoursesContainer">
     <MyCoursesHero/>
     <div className="MyPageCourses-Wrapper">
      <h2 className="MyCoursesTitle">Your Courses</h2>
      <div className="MyPageCourses">
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      </div>
     </div>
   </div>
 
  );
};

export default MyCoursesPage;
