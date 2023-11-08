import React, { useEffect, useState } from "react";
import axios from "axios";
import "../TrainerDashCSS/TrainerDashcourse.css";
import TrainerDashCourses from "./TrainerDashCourses";

const TrainerDashCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_API_URL}/courses/getCoursesByTrainerId/${localStorage.getItem('userId')}`)
      .then((response) => {
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="TrainerDashMainContainer">
      <div className="TrainerDashCoursesContainer">
        {courses.map((course) => (
          <TrainerDashCourses
            key={course.Course_id}
            CourseName={course.CourseName}
            CourseDesc={course.CourseDescription}
            StudentCount={course.StudentCount}
            CourseImage={course.CourseImage}
            Duration={formatDuration(course.CourseStartTime, course.CourseEndTime)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrainerDashCoursesPage;
function formatDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.getMonth() + 1; 
  const endMonth = end.getMonth() + 1;

  return `from ${start.getDate()}/${startMonth} to ${end.getDate()}/${endMonth}`;
}