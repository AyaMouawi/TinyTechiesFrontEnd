import React from 'react';

import "../css/CourseRegister.css";
//import "bootstrap/dist/css/bootstrap.min.css";


const CourseRegister = () => {
    return (
      <div className="courseRegister-container">
      <div className="image-container">
        <img src="Images/b1.jpg" alt="" />
      </div>
      <div className="courseRegister-details">
        <div className="CourseRegister-Title">
          <h5>Course Name</h5>
        </div>
        <div className='CourseRegister-Description'>
          <p>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <hr className='Horizontal-CourseRegister' />
        <div className='Footer-CourseRegister'>
          <div className='footer-courseRegister-item'>
            <img src="Images/users-solid.svg" className='CourseRegisterFooterImage' alt="" />
            <p>20 Students</p>
          </div>
          <div className='footer-courseRegister-item'>
            <img src="Images/clock-regular.svg" className='CourseRegisterFooterImage' alt="" />
            <p>From 2 July To 12 July</p>
          </div>
          <div className='footer-courseRegister-item'>
            <button className='CourseRegisterbtn'>Register</button>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default CourseRegister;