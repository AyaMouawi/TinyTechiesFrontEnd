import React from "react";
import { useState } from "react";
import "../TrainerDashCSS/TrainerDashAttendanceCourse.css";

const TrainerDashAttendanceCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = ["Course 1", "Course 2", "Course 3", "Course 4"];
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <div className='attendance-course'>
        <select
          value={selectedCourse}
          onChange={handleCourseChange}
          className='attendance-course-btn'
        >
          <option value=''>Your Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TrainerDashAttendanceCourse;
