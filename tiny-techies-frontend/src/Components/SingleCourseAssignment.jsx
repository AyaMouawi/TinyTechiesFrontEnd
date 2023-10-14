import React from "react";
// bootsrap
import "bootstrap/dist/css/bootstrap.css";
// css
import "../css/SingleCourseAssignment.css";
import AssignmentCard from "./AssignmentCard";
import AssigmentTable from "./AssigmentTable";

const SingleCourseAssignment = () => {
  return (
    <div className='p-3'>
      <div className='single-course-assignment'>
        <h1 className='text-center'>Your Assignments</h1>
        <div className='single-course-assignment-nav'>
          <aside className='d-grid g-5 gap-lg-3'>
            <AssignmentCard />
            <AssignmentCard />
          </aside>
          <div className='assignment-content'>
            <AssigmentTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseAssignment;
