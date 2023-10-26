import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../TrainerDashCSS/TrainerDashcourse.css";

const TrainerDashCourses = () => {
  const [courses, setCourses] = useState([]);
  const api = "http://localhost:8000/courses/getAll";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        if (response.data && response.data.success) {
          setCourses(response.data.data);
        } else {
          throw new Error('Failed to retrieve data from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="trainerdash-course-container">
      {courses.length > 0 ? (
        courses.map((course, index) => (
          <div className="trainerdash" key={index}>
            <div className="trainerdash-course-details">
              <div className="trainerdash-Course-Title">
                <h2>{course.CourseName}</h2>
              </div>
              <div className="trainerdash-Course-Description">
                <p>{course.CourseDescription}</p>
              </div>
              <hr className="trainerdash-Horizontal-Course" />
              <div className="trainerdash-Footer-Course">
                <div className="trainerdash-footer-course-item">
                  <img src="images/users-solid.svg" className="trainerdash-CourseFooterImage" alt="" />
                  <p>{course.StudentCount} Students</p>
                </div>
                <div className="trainerdash-footer-course-item">
                  <img src="images/clock-regular.svg" className="trainerdash-CourseFooterImage" alt="" />
                  <p>From {course.CourseStartTime} To {course.CourseEndTime}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default TrainerDashCourses;
