import React, { useEffect, useState } from "react";
import "../css/CoursesSection.css";
import Course from "./Course.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_API_URL}/courses/getPopular`)
      .then((response) => {
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const formatDates = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    const startMonthDay = `${startDate.getMonth() + 1}/${startDate.getDate()}`;
    const endMonthDay = `${endDate.getMonth() + 1}/${endDate.getDate()}`;

    return `from ${startMonthDay} to ${endMonthDay}`;
  };

  return (
    <div className="PopularCourses-Wrapper">
      <div className="PopularCourses-Title">
        <div className="TitleLeftCourses">
          <h1>Most Popular Courses</h1>
        </div>
        <div className="TitleRightCourses">
          <h6><a href="/CoursesPage">View all courses -{">"}</a></h6>
        </div>
      </div>
      <div className="Courses">
        {courses.map(course => (
          <Course
            key={course.Course_id}
            CourseName={course.CourseName}
            CourseDesc={course.CourseDescription}
            StudentsCount={course.StudentCount}
            Duration={formatDates(course.CourseStartTime, course.CourseEndTime)}
            imageUrl={course.CourseImage} 
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
