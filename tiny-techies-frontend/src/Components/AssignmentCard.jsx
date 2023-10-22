import React from "react";

const AssignmentCard = ({AssignmentName, AssignmentDesc, FileUrl, ZoomUrl, ZoomDate, DueDate}) => {
  return (
    <div>
      <div className='card'>
        <img src='/Images/b1.jpg' className='card-img-top' alt='card-sora' />
        <div className='card-body'>
        <h5 className='card-title' style={{ overflow: 'hidden' }}>{AssignmentName}</h5>
          <p className='card-text'>
            {AssignmentDesc}
          </p>
          <a href={FileUrl} target="_blank"  className='card-text'> <p className='card-text'>Accsess The Assignment File </p></a>
          <a href={ZoomUrl} target="_blank"  className='card-text'> <p className='card-text'>ZoomLink</p></a>
          <p className='card-text'>zoom Date: {ZoomDate}</p>
         
          
          <hr />
          <div className='assignment-card-time'>
            <img
              src='/Images/clock-regular.svg'
              alt='icon'
              className='assignment-card-icon'
            />
            <p>{DueDate}</p>
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
