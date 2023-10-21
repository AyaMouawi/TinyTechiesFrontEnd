import React, { useEffect, useState } from "react";
import "../css/CoursesPage.css";
import CourseRegister from "./CourseRegister";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import axios from "axios";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchCourseName, setSearchCourseName] = useState("");
  const [foundCourse, setFoundCourse] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/courses/getAll")
      .then((response) => {
        const courseData = response.data.data;
        setCourses(courseData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSearch = () => {
    axios.get(`http://localhost:8000/courses/getByName/${searchCourseName}`)
      .then((response) => {
        const courseData = response.data;
        setFoundCourse(courseData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setFoundCourse(null);
      });
  };

  const handleIconClick = () => {
    if (searchCourseName.trim() !== "") {
      handleSearch();
    } else {
      // Handle empty search here, e.g., show an error message.
    }
  };

  const handleInputChange = (e) => {
    setSearchCourseName(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="PageCourses-Wrapper">
        <div className="PageCourses-search">
          <img
            className="PageCourses-search-image"
            src="Images/magnifying-glass-solid.svg"
            alt=""
            onClick={handleIconClick}
          />
          <input
            className="PageCourses-input-search"
            type="text"
            placeholder="Search By Name"
            value={searchCourseName}
            onChange={handleInputChange}
          />
        </div>
        <div className="PageCourses">
          {foundCourse ? (
            <CourseRegister
              CourseImage={foundCourse.CourseImage}
              CourseName={foundCourse.CourseName}
              CourseDesc={foundCourse.CourseDescription}
              StudentCount={foundCourse.StudentCount}
              Duration={`From ${new Date(foundCourse.CourseStartTime).getDate()} ${new Date(foundCourse.CourseStartTime).getMonth() + 1} To ${new Date(foundCourse.CourseEndTime).getDate()} ${new Date(foundCourse.CourseEndTime).getMonth() + 1}`}
            />
          ) : (
            courses.map((course) => (
              <CourseRegister
                key={course.Course_id}
                CourseImage={course.CourseImage}
                CourseName={course.CourseName}
                CourseDesc={course.CourseDescription}
                StudentCount={course.StudentCount}
                Duration={`From ${new Date(course.CourseStartTime).getDate()} ${new Date(course.CourseStartTime).getMonth() + 1} To ${new Date(course.CourseEndTime).getDate()} ${new Date(course.CourseEndTime).getMonth() + 1}`}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
