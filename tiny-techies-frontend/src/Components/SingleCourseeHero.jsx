import React from "react";
// bootstrap
// import "bootstrap/dist/css/bootstrap.css";
// css
import "../css/SingleCourseHero.css";
const SingleCourseHero = () => {
  return (
    <div className=' single-course-hero-navbar d-flex align-items-center justify-content-between '>
      <div className='single-course-hero'>
        <h1 className='single-course-hero-title'>Course Name</h1>
        <p className='single-course-hero-subTitle'>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='single-course-hero-Tutor'>
          <img
            src='/Images/person-chalkboard-solid.svg'
            alt='icon'
            className='single-course-hero-icon'
          />
          <p>TutorName</p>
        </div>
        <div className='single-course-hero-time   '>
          <div className='single-course-hero-time-one '>
            <img
              src='/Images/clock-regular.svg'
              alt='icon'
              className='single-course-hero-icon'
            />
            <p>From 2 July To 12 July </p>
          </div>
          <div className='single-course-hero-students '>
            <img
              src='/Images/users-solid.svg'
              alt='icon'
              className='single-course-hero-icon'
            />
            <p>20 students </p>
          </div>
        </div>
      </div>
      <div className=' '>
        <img
          src='/Images/b1.jpg'
          alt='icon'
          className='single-course-hero-image'
        />
      </div>
    </div>
  );
};

export default SingleCourseHero;
