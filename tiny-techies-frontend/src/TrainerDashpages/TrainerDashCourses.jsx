import React from "react";
import "../TrainerDashCSS/TrainerDashcourse.css";
const TrainerDashCourses = () => {
  return (
 
    <div className='trainerdash-course-container'>
      <div className='trainerdash-image-container'>
        <img src='images/b1.jpg' alt='' />
      </div>
      <div className='trainerdash-course-details'>
        <div className='trainerdash-Course-Title'>
          <h2>Course Name</h2>
        </div>
        <div className='trainerdash-Course-Description'>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <hr className='trainerdash-Horizontal-Course' />
       
        <div className='trainerdash-Footer-Course'>
          <div className='trainerdash-footer-course-item'>
            <img
              src='images/users-solid.svg'
              className='trainerdash-CourseFooterImage'
              alt=''
            />
            <p>20 Students</p>
          </div>
          <div className='trainerdash-footer-course-item'>
            <img
              src='images/clock-regular.svg'
              className='trainerdash-CourseFooterImage'
              alt=''
            />
            <p>From 2 July To 12 July</p>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default TrainerDashCourses;
