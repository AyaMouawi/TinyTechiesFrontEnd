import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashCourses = ({ courses, onDeleteCourse, onEditCourse }) => {
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [editedCourse, setEditedCourse] = useState({});

  const handleEditClick = (courseId) => {
    setEditingCourseId(courseId);
    const courseToEdit = courses.find((course) => course.Course_id === courseId);
    setEditedCourse(courseToEdit);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCourse({
      ...editedCourse,
      [name]: value,
    });
  };

  const handleEditSubmit = () => {
    fetch(`${process.env.REACT_APP_API_URL}/courses/update/${editingCourseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedCourse),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(`${editedCourse.CourseName} updated successfully`, {
          autoClose: 2000,
        });
        setEditingCourseId(null); // Exit edit mode
        onEditCourse(); // Notify the parent component that an edit is done
      })
      .catch((error) => console.error('Error updating course:', error));
  };

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
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {courses.map((course) => (
                <tr key={course.Course_id}>
                  <td>
                    {editingCourseId === course.Course_id ? (
                      <input
                        type="text"
                        name="CourseName"
                        value={editedCourse.CourseName}
                        onChange={handleEditInputChange}
                      />
                    ) : (
                      course.CourseName
                    )}
                  </td>
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
                    {editingCourseId === course.Course_id ? (
                      <button onClick={handleEditSubmit}>Save</button>
                    ) : (
                      <button onClick={() => handleEditClick(course.Course_id)}>Edit</button>
                    )}
                  </td>
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
