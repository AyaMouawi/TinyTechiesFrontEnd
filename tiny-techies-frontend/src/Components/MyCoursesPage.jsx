import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import '../css/MyCoursesPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCoursesHero from './MyCoursesHero';
import SingleCourse from './SingleCourse';
import axios from "axios";

const MyCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    axios.get(`http://localhost:8000/courses/getStudentCourse/${localStorage.getItem('userId')}`)
      .then((response) => {
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="MyCoursesContainer">
        <MyCoursesHero />
        <div className="MyPageCourses-Wrapper">
          <h2 className="MyCoursesTitle">Your Courses</h2>
          <div className="MyPageCourses">
            {courses.map((course) => (
              <SingleCourse
                key={course.Course_id}
                CourseName={course.CourseName}
                CourseDesc={course.CourseDescription}
                StudentsCount={course.StudentCount}
                Duration={formatDuration(course.CourseStartTime, course.CourseEndTime)}
                imageUrl={course.CourseImage}
                CourseId={course.Course_id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCoursesPage;


function formatDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.getMonth() + 1; 
  const endMonth = end.getMonth() + 1;

  return `from ${start.getDate()}/${startMonth} to ${end.getDate()}/${endMonth}`;
}



