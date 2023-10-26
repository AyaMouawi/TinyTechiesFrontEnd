import React, { useState, useEffect } from "react";
import axios from "axios";
import "../TrainerDashCSS/TrainerDashAttendanceCourse.css";

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
            <option key={index} value={course.Course_id}>
              {course.CourseName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TrainerDashAttendanceCourse;
