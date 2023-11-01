import React, { useState, useEffect } from 'react';
import '../AdminDashCSS/AdminDash.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashStudents = () => {
  const [studentsData, setStudentsData] = useState([]);

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
    
    axios.delete(`${process.env.REACT_APP_API_URL}/user/delete/${studentId}`)
      .then(() => {
        setStudentsData(studentsData.filter(student => student.User_id !== studentId));
        toast.success('Student Deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting Student:', error);
        toast.error('Failed to delete Student');
      });
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
             
             
                {studentsData.map((student) => (
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
                    <td>{student.UserAbsence}</td>
                    <td>
                      <button onClick={() => handleDeleteStudent(student.User_id)}>
                        <img src="Images/trash-solid.svg" className="imgedit"  alt="Delete" />
                      </button>
                    </td>
                  </tr>
                ))}
        
            </table>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default AdminDashStudents;
