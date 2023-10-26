import React, { useState } from "react";
import AdminDashAddcourse from "./AdminDashAddcourse";
import AdminDashCourses from "./AdminDashCourses";
// css
import "../AdminDashCSS/AdminDash.css";
const AdminDashCourseToggle = () => {
  const [addCourse, setAddCourse] = useState(false);
  const [viewCourses, setViewCourses] = useState(false);

  const toggleAddCourse = () => {
    setAddCourse(!addCourse);
    setViewCourses(false);
  };

  const toggleViewCourses = () => {
    setAddCourse(false);
    setViewCourses(!viewCourses);
  };

  return (
    <div className="TrainerDashMainContainer">
      <div className='transitionbtns'>
        <button className='mainbuttons' onClick={toggleAddCourse}>
          Add Course
        </button>

        <button className='mainbuttons' onClick={toggleViewCourses}>
          View Courses
        </button>
      </div>
      <div className='dash-toggle-center'>
        {addCourse && <AdminDashAddcourse />}
        {viewCourses && <AdminDashCourses />}
      </div>
    </div>
  );
};

export default AdminDashCourseToggle;
