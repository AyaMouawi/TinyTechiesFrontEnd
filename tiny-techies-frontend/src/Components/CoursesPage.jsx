import React from "react";
import "../css/CoursesPage.css";
import CourseRegister from "./CourseRegister";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";



const CoursesPage = () => {
  return (
    <>   
    <NavBar/>
    
     <div className="PageCourses-Wrapper">
    <div className="PageCourses-search"> <img className="PageCourses-search-image" src="Images/magnifying-glass-solid.svg" alt="" /><input className="PageCourses-input-search" type="text" placeholder="Search By Name" id="" /></div>
    <div className="PageCourses">
      <CourseRegister />
      <CourseRegister />
      <CourseRegister />
      <CourseRegister />
      <CourseRegister />
      <CourseRegister />
      <CourseRegister />
      <CourseRegister />
    </div>
  </div>
  </>

  );
};

export default CoursesPage;
