import React from "react";

import SingleProjectCard from "./SingleProjectCard";
import ProjectForm from "./ProjectForm";
// css
import "../css/SingleCourseProject.css";
import "../css/SingleCourseResponsive.css";
function SingleCourseProject() {
  return (
    <div className='p-3'>
      <h1 className='text-center'> Your Projects</h1>
      <div className='project-content'>
        <aside className='project-aside'>
          <SingleProjectCard />
          <SingleProjectCard />
        </aside>
        <>
          <div className='project-form m-2'>
            <ProjectForm />
          </div>
        </>
      </div>
    </div>
  );
}

export default SingleCourseProject;
