import React from "react";
import "../css/SingleCourseHero.css";
const SingleCourseHero = ({CourseName, CourseDesc, TutorName, Duration, StudentsCount, CourseFile}) => {
  return (
    <div className=' single-course-hero-navbar d-flex align-items-center justify-content-between  '>
      <div className='single-course-hero'>
        <h1 className='single-course-hero-title'>{CourseName}</h1>
        <p className='single-course-hero-subTitle'>
         {CourseDesc}
        </p>
        <div className='single-course-hero-Tutor'>
          <img
            src='/Images/person-chalkboard-solid.svg'
            alt='icon'
            className='single-course-hero-icon'
          />
          <p>{TutorName}</p>
        </div>
        <div className='single-course-hero-time   '>
          <div className='single-course-hero-time-one '>
            <img
              src='/Images/clock-regular.svg'
              alt='icon'
              className='single-course-hero-icon'
            />
            <p>{Duration} </p>
          </div>
          <div className='single-course-hero-students '>
            <img
              src='/Images/users-solid.svg'
              alt='icon'
              className='single-course-hero-icon'
            />
            <p>{StudentsCount} </p>
          </div>
        </div>
      </div>
      <div  className="single-course-hero-video">
        <video controls >
          <source src={CourseFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default SingleCourseHero;
