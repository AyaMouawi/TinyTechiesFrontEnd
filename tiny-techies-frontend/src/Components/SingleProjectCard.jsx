import React from "react";
// css
import "../css/SingleCourseProject.css";

const SingleProjectCard = () => {
  return (
    <div>
      <div className='project-card'>
        <img src='/Images/g4.png' alt='header' className='project-card-image' />
        <div className='project-card-title'>
          <img
            src='/Images/g1.png'
            alt='beside name'
            className='project-card-image-name'
          />
          <div className='project-card-text'>
            <p className='card-title'>Sudent name</p>
            <p className='project-card-subTitle'>Project name</p>
          </div>
        </div>
        <h4 className='project-card-des'>
          SmallDesc Consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </h4>
      </div>
    </div>
  );
};

export default SingleProjectCard;
