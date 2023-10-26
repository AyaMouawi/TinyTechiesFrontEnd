import React, { useState, useEffect } from "react";
import axios from "axios";
import "../TrainerDashCSS/TrainerDashAttendanceCourse.css";
import TrainerDashAttendanceTable from "../TrainerDashpages/TrainerDashAttendanceTable";

const TrainerDashAttendanceCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/courses/getCoursesByTrainerId/${localStorage.getItem('userId')}`);
        setCourses(response.data.data);

      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;
    setSelectedCourse(selectedCourse);
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
            <option key={index} value={course.CourseName}>
              {course.CourseName}
            </option>
          ))}
        </select>
      </div>
      <TrainerDashAttendanceTable selectedCourse={selectedCourse} />
    </div>
  );
};

export default TrainerDashAttendanceCourse;
