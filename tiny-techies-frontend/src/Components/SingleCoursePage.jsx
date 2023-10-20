import React from "react";
import SingleCourseHero from "./SingleCourseHero";
import SingleCourseAssignment from "./SingleCourseAssignment";
import SingleCourseProject from "./SingleCourseProject";
import NavBar from "./NavBar";


function SingleCoursePage() {
  return (
    <div className='container'>
      <NavBar/>
      <SingleCourseHero />
      <SingleCourseAssignment />
      <SingleCourseProject />
    </div>
  );
}

export default SingleCoursePage;
