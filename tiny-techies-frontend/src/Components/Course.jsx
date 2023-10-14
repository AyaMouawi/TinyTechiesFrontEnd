import React from 'react';
import "../css/Course.css";



const Course = () => {
    return (
      <div className="course-container">
      <div className="image-container">
        <img src="images/b1.jpg" alt="" />
      </div>
      <div className="course-details">
        <div className="Course-Title">
          <h5>Course Name</h5>
        </div>
        <div className='Course-Description'>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <hr className='Horizontal-Course' />
        <div className='Footer-Course'>
          <div className='footer-course-item'>
            <img src="images/users-solid.svg" className='CourseFooterImage' alt="" />
            <p>20 Students</p>
          </div>
          <div className='footer-course-item'>
            <img src="images/clock-regular.svg" className='CourseFooterImage' alt="" />
            <p>From 2 July To 12 July</p>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Course;