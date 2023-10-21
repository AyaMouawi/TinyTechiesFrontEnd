import React from 'react';
import "../css/CourseRegister.css";


const CourseRegister = ({CourseImage, CourseName,CourseDesc, StudentCount, Duration} ) => {
    return (
      <div className="courseRegister-container">
      <div className="image-container">
        <img src={CourseImage} alt="" />
      </div>
      <div className="courseRegister-details">
        <div className="CourseRegister-Title">
          <h5>{CourseName}</h5>
        </div>
        <div className='CourseRegister-Description'>
          <p>
           {CourseDesc}
          </p>
        </div>
        <hr className='Horizontal-CourseRegister' />
        <div className='Footer-CourseRegister'>
          <div className='footer-courseRegister-item'>
            <img src="Images/users-solid.svg" className='CourseRegisterFooterImage' alt="" />
            <p>{StudentCount}</p>
          </div>
          <div className='footer-courseRegister-item'>
            <img src="Images/clock-regular.svg" className='CourseRegisterFooterImage' alt="" />
            <p>{Duration}</p>
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