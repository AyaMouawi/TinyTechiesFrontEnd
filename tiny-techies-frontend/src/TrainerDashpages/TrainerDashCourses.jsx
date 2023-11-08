import React from "react";
import "../TrainerDashCSS/TrainerDashcourse.css";
const TrainerDashCourses = ({CourseName, CourseDesc, StudentCount, Duration, CourseImage}) => {
  return (
 
    <div className='trainerdash-course-container'>
      <div className='trainerdash-image-container'>
        <img src={CourseImage} alt='' />
      </div>
      <div className='trainerdash-course-details'>
        <div className='trainerdash-Course-Title'>
          <h4>{CourseName}</h4>
        </div>
        <div className='trainerdash-Course-Description'>
          <p>
            {CourseDesc}
          </p>
        </div>
        <hr className='trainerdash-Horizontal-Course' />
       
        <div className='trainerdash-Footer-Course'>
          <div className='trainerdash-footer-course-item'>
            <img
              src='Images/users-solid.svg'
              className='trainerdash-CourseFooterImage'
              alt=''
            />
            <p>{StudentCount}</p>
          </div>
          <div className='trainerdash-footer-course-item'>
            <img
              src='Images/clock-regular.svg'
              className='trainerdash-CourseFooterImage'
              alt=''
            />
            <p>{Duration}</p>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default TrainerDashCourses;
