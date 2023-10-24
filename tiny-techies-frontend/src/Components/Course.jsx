import React from 'react';
import "../css/Course.css";


const Course = ({CourseName , CourseDesc , StudentsCount , Duration ,imageUrl }) => {
    return (
      <div className="course-container">
   <div className="image-container">
    <img src={imageUrl} alt={CourseName} />
        </div>
      
      <div className="course-details">
        <div className="Course-Title">
          <h5>{CourseName}</h5>
        </div>
        <div className='Course-Description'>
          <p>
            {CourseDesc}
          </p>
          
        </div>
        <hr className='Horizontal-Course' />
        <div className='Footer-Course'>
          <div className='footer-course-item'>
            <img src="Images/users-solid.svg" className='CourseFooterImage' alt="" />
            <p>{StudentsCount}</p>
          </div>
          <div className='footer-course-item'>
            <img src="Images/clock-regular.svg" className='CourseFooterImage' alt="" />
            <p>{Duration}</p>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Course;