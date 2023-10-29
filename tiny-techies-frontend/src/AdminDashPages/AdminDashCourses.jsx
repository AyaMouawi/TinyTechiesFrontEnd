import React from 'react';
import '../AdminDashCSS/AdminDash.css';

const AdminDashCourses = ({ courses, onDeleteCourse }) => {
  return (
    <div>
      <div className="cardiv">
        <div className="bgcardcourses">
          <div className="inputsdivcourses">
            <table border="1" className="tbcourse">
              <tr>
                <th>Course Name</th>
                <th>Trainer Name</th>
                <th>Course Description</th>
                <th>StudentsCount</th>
                <th>Course file</th>
                <th>Course Image</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Delete</th>
              </tr>
              {courses.map((course) => (
                <tr key={course.Course_id}>
                  <td>{course.CourseName}</td>
                  <td>{course.TrainerName}</td>
                  <td>{course.CourseDescription}</td>
                  <td>{course.StudentCount}</td>
                  <td>
                  
                    <a href={course.CourseFile} target="_blank" rel="noopener noreferrer">
                      Click here
                    </a>
                  </td>
                  <td>

                    <img src={course.CourseImage} alt="Course" width="50" height="50" />
                  </td>
                  <td>{course.CourseStartTime.split('T')[0]}</td>
                  <td>{course.CourseEndTime.split('T')[0]}</td>
                  <td>
                    <button onClick={() => onDeleteCourse(course.Course_id)}>
                      <img src="Images/trash-solid.svg" className="imgedit" alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashCourses;
