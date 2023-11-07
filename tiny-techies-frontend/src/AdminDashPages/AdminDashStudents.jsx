import React, { useState, useEffect } from 'react';
import '../AdminDashCSS/AdminDash.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashStudents = () => {
  const [studentsData, setStudentsData] = useState([]);
  // declare the variable current 
  const [currentIndex, setCurrentIndex] = useState(0);
  // set the pages to show only 5 rows
  const dataPerPage = 5;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/student/getAllStudentsAndCourses`)
      .then((response) => {
        setStudentsData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDeleteStudent = (studentId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');

    if (confirmDelete) {
      axios.delete(`${process.env.REACT_APP_API_URL}/user/delete/${studentId}`)
        .then(() => {
          setStudentsData(studentsData.filter(student => student.User_id !== studentId));
          toast.success('Student Deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting Student:', error);
          toast.error('Failed to delete Student');
        });
    }
  };

  // create next previous buttons
  const handleNext = () => {
    setCurrentIndex(currentIndex + dataPerPage);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - dataPerPage);
  };

  return (
    <div className='AdminDashMainContainer'>
      <div className="cardiv">
        <div className="bgcardcourses">
          <div className="inputsdivcourses">
            <table border="1" className="tbcourse">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Course Name</th>
                <th>Absence</th>
                <th>Actions</th>
              </tr>
              {/* you should make slice to the array */}
              {studentsData.slice(currentIndex, currentIndex + dataPerPage).map((student) => (
                <tr key={student.User_id}>
                  <td>{student.UserFullName}</td>
                  <td>{student.UserAge}</td>
                  <td>{student.UserEmail}</td>
                  <td>
                    {student.EnrolledCourses && student.EnrolledCourses.length > 0 && (
                      <ul>
                        {student.EnrolledCourses.split(',').map((course, index) => (
                          <li key={index}>{course}</li>
                        ))}
                      </ul>
                    )}
                  </td>
                  <td>{student.Absence}</td>
                  <td>
                    <button onClick={() => handleDeleteStudent(student.User_id)}>
                      <img src="Images/trash-solid.svg" className="imgedit"  alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </table>
            {/*added buttons next previous*/}
            <div className="pagination">
              <button disabled={currentIndex === 0} onClick={handlePrevious} className="btn-next">
                Previous
              </button>
              <button
                disabled={currentIndex + dataPerPage >= studentsData.length }
                onClick={handleNext}
                className="btn-next"
              >
                Next
              </button>
              </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default AdminDashStudents;
