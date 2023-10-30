import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../AdminDashCSS/AdminDash.css';

const AdminDashStudents = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/student/getAllStudentsAndCourses`)
      .then((response) => {
        setStudent(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);


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
              </tr>
              {student.map((data) => (
                <tr key={data.id}>
                  <td>{data.UserFullName}</td>
                  <td>{data.UserAge}</td>
                  <td>{data.UserEmail}</td>
                  <td>{data.EnrolledCourses}</td>
                  <td>{data.UserAbsence}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashStudents;
