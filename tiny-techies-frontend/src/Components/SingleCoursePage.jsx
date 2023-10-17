import React from "react";
import SingleCourseHero from "./SingleCourseHero";
import SingleCourseAssignment from "./SingleCourseAssignment";
import SingleCourseProject from "./SingleCourseProject";

function SingleCoursePage() {
  return (
    <div className='container'>
      <SingleCourseHero />
      <SingleCourseAssignment />
      <SingleCourseProject />
    </div>
  );
}

export default SingleCoursePage;
