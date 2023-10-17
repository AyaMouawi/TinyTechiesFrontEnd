import React from "react";

const AssignmentCard = () => {
  return (
    <div>
      <div className='card'>
        <img src='/Images/b1.jpg' className='card-img-top' alt='card-sora' />
        <div className='card-body'>
        <h5 className='card-title' style={{ overflow: 'hidden' }}>Assignment Name</h5>
          <p className='card-text'>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Assignment Desc
          </p>
          <p className='card-text'>ZoomLink: wertuioiuygtfrdsfghui </p>
          <hr />
          <div className='assignment-card-time'>
            <img
              src='/Images/clock-regular.svg'
              alt='icon'
              className='assignment-card-icon'
            />
            <p>12 July</p>
          </div>

          <div className='d-flex justify-content-evenly'>
            <button className='btn'>Choose File</button>
            <button className='btn'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
