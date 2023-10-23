import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleCourseHero from "./SingleCourseHero";
import SingleCourseAssignment from "./SingleCourseAssignment";
import SingleCourseProject from "./SingleCourseProject";
import SingleNav from "./SingleNav";

function SingleCoursePage() {
  const {CourseId } = useParams();
  console.log(CourseId)
  const [courseData, setCourseData] = useState({
    CourseName: "",
    CourseDesc: "",
    TutorName: "",
    Duration: "",
    CourseFile: "",
    StudentsCount: 0,
  });

  useEffect(() => {
   
    axios.get(`http://localhost:8000/courses/get/${CourseId}`)
      .then((response) => {
        const data = response.data.data[0];
        const startDate = new Date(data["Start Date"]);
        const endDate = new Date(data["End Date"]);
        const duration = `from ${startDate.getDate()}/${startDate.getMonth() + 1} to ${endDate.getDate()}/${endDate.getMonth() + 1}`;
        
        setCourseData({
          CourseName: data["Course Name"],
          CourseDesc: data["Course Description"],
          TutorName: data["Tutor Name"],
          Duration: duration,
          CourseFile: data["Course File"],
          StudentsCount: data["StudentsCount"],
        });
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  },  [CourseId]);

  return (
    <div className="container">
      {/* <SingleNav/> */}
      <SingleCourseHero {...courseData} />
      <SingleCourseAssignment />
      <SingleCourseProject />
    </div>
  );
}

export default SingleCoursePage;
