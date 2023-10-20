import React from "react";
import SingleCourseHero from "./SingleCourseeHero";
import SingleCourseAssignment from "./SingleCourseAssignment";
import SingleCourseProject from "./SingleCourseProject";

function SingleCoursPage() {
  return (
    <div className='container'>
      <SingleCourseHero />
      <SingleCourseAssignment />
      <SingleCourseProject />
    </div>
  );
}

export default SingleCoursPage;
