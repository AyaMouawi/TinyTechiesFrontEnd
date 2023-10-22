import React, { useState } from "react";
import "../css/DashGrade.css";

const DashGrade = () => {
  // this for selecting the course
  const [selectedCourse, setSelectedCourse] = useState("");
  // for selecting student name
  const [selectedStudent, setSelectedStudent] = useState("");
  // selecting grades
  const [selectedGrades, setSelectedGrades] = useState("");

  // courses array to get it from database later on
  const courses = ["Course 1", "Course 2", "Course 3", "Course 4"];
  // to handle the course chaning
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  // array to get student name from data base later on
  const studentNames = ["Mohamad", "Aya", "Alaa", "Marian"];
  // handle change
  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };
  // array to get student grades from database later
  const grades = ["grade 1", "grade 2", " 3", " 4"];
  const handleGradeChange = (event) => {
    setSelectedGrades(event.target.value);
  };

  return (
    <div>
      <div className='dash-grades'>
        <h2 className='grade-title'>Student Grades</h2>
        <div className='grades-input-list'>
          <div className='grades-input'>
            <select
              value={selectedCourse}
              onChange={handleCourseChange}
              className='grade-select'
            >
              <option value=''>Your Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div className='grades-input'>
            <select
              value={selectedStudent}
              onChange={handleStudentChange}
              className='grade-select'
            >
              <option value=''>Student Name</option>
              {studentNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className='grades-input'>
            <label htmlFor=''>Student Assignment</label>
            <textarea name='' id=''></textarea>
          </div>
        </div>
        <div className='grades-selecteds'>
          <select
            value={selectedGrades}
            onChange={handleGradeChange}
            className='grades-selected'
          >
            <option value=''>Grades</option>
            {grades.map((grades, index) => (
              <option key={index} value={grades} className=' grades-option'>
                {grades}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DashGrade;
