import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../TrainerDashCSS/TrainerDashGrade.css";

const TrainerDashGrade = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedGrades, setSelectedGrades] = useState("");
  const [courses, setCourses] = useState([]);
  const [studentNames, setStudentNames] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState("");
  const [assignmentNames, setAssignmentNames] = useState([]);
  const [assignmentFileURL, setAssignmentFileURL] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/courses/getCoursesByTrainerId/${localStorage.getItem('userId')}`)
      .then((response) => {
        const courseNames = response.data.data.map((course) => course.CourseName);
        setCourses(courseNames);
      })
      .catch((error) => {
        console.error("Error fetching course data: " + error);
        setError(error);
      });
  }, []);

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;
    setSelectedCourse(selectedCourse);

    axios.get(`http://localhost:8000/student/getByCourseName/${selectedCourse}`)
      .then((response) => {
        const studentNames = response.data.data.map((student) => student.UserFullName);
        setStudentNames(studentNames);
      })
      .catch((error) => {
        console.error("Error fetching student data: " + error);
        setError(error);
      });

    axios.get(`http://localhost:8000/assignmentContent/getAssignmentByCourse/${selectedCourse}`)
      .then((response) => {
        const assignmentNames = response.data.data.map((assignment) => assignment.AssignmentName);
        setAssignmentNames(assignmentNames);
      })
      .catch((error) => {
        console.error("Error fetching assignment data: " + error);
        setError(error);
      });
  };

  const grades = ["A", "B", "C"];

  const handleGradeChange = (event) => {
    setSelectedGrades(event.target.value);
  };

  const handleAssignmentChange = (event) => {
    setSelectedAssignment(event.target.value);
  };

  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  const handleGradeUpdate = () => {
    if (selectedAssignment && selectedStudent && selectedGrades) {
      axios
        .put(`http://localhost:8000/myAssignments/update/${selectedAssignment}/${selectedStudent}`, {
          Grade: selectedGrades
        })
        .then((response) => {
          toast.success("Grade Added Successfully");
        })
        .catch((error) => {
          toast.error("Error adding grade: " + error);
          setError(error);
        });
    } else {
      toast.error("Please select Assignment, Student, and Grade.");
    }
  };

  useEffect(() => {
    if (selectedStudent && selectedAssignment) {
      const apiUrl = `http://localhost:8000/myAssignments/getAssignmentFile/${selectedStudent}/${selectedAssignment}`;

      axios.get(apiUrl)
        .then((response) => {
          const assignmentFileURL = response.data.data;
          console.log("Fetched Assignment File URL:", assignmentFileURL);
          setAssignmentFileURL(assignmentFileURL);
        })
        .catch((error) => {
          console.error("Error fetching assignment file: " + error);
          setError(error);
        });
    }
  }, [selectedStudent, selectedAssignment]);

  return (
    <div>
      <div className="dash-grades">
        <h2 className="grade-title">Student Grades</h2>
        <div className="grades-input-list">
          <div className="grades-input">
            <select
              value={selectedCourse}
              onChange={handleCourseChange}
              className="grade-select"
            >
              <option value="">Your Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <div className="grades-input">
            <select
              value={selectedStudent}
              onChange={handleStudentChange}
              className="grade-select"
            >
              <option value="">Student Name</option>
              {studentNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="grades-input">
            <select
              value={selectedAssignment}
              onChange={handleAssignmentChange}
              className="grade-select"
            >
              <option value="">Assignment Name</option>
              {assignmentNames.map((assignment, index) => (
                <option key={index} value={assignment}>
                  {assignment}
                </option>
              ))}
            </select>
          </div>
          <div className="grades-input">
            <a href={assignmentFileURL} target="_blank">
              <div>Student Assignment</div>
            </a>
          </div>
        </div>
        <div className="grades-selecteds">
          <select
            value={selectedGrades}
            onChange={handleGradeChange}
            className="grades-selected"
          >
            <option value="">Grades</option>
            {grades.map((grade, index) => (
              <option key={index} value={grade} className="grades-option">
                {grade}
              </option>
            ))}
          </select>
        </div>
        <div className="GradeBtnContainer">
          <button onClick={handleGradeUpdate}>Update Grade</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TrainerDashGrade;
