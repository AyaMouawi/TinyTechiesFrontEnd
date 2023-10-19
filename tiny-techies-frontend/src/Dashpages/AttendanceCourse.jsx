import React from "react";
import { useState } from "react";
const AttendanceCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = ["Course 1", "Course 2", "Course 3", "Course 4"];
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <div className=''>
        <select
          value={selectedCourse}
          onChange={handleCourseChange}
          className=''
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

export default AttendanceCourse;
