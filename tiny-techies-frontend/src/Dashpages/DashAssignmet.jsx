import React, { useState } from "react";
// css
import "../css/DashAssignmet.css";
const DashAssignmet = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = ["Course 1", "Course 2", "Course 3", "Course 4"];
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className='dash-assignment'>
      <h2 className='assignment-title'>Add Assignment</h2>
      <div className='assignment-input-list'>
        <div className='assignment-input'>
          <select
            value={selectedCourse}
            onChange={handleCourseChange}
            className='assignment-select'
          >
            <option value=''>Your Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className='assignment-input'>
          <label htmlFor=''>Zoom link</label>
          <input type='text' name='' id='' className='assignment-zoom' />
        </div>
        <div className='assignment-input-meeting'>
          <>
            <label htmlFor=''>Meeting Date</label>
            <input type='date' name='' id='' className='meeting-date' />
          </>
        </div>
        <div className='assignment-files'>
          <div className=''>
            <label htmlFor=''>Assignment File</label>
            <input type='file' name='' id='' />
          </div>
          <div className=''>
            <label htmlFor=''>Due Date</label>
            <input type='date' name='' id='' className='due-date' />
          </div>
        </div>
        <div className='assignment-input'>
          <label htmlFor=''>Assignment Requirements </label>
          <textarea name='' id='' className='assignment-requirement'></textarea>
        </div>
      </div>
      <button type='submit' className='assignment-btn-submit'>
        Submit
      </button>
    </div>
  );
};

export default DashAssignmet;
