import React, { useState, useEffect } from "react";
import axios from "axios";
import "../TrainerDashCSS/TrainerDashAttendanceTable.css";

const TrainerDashAttendanceTable = (props) => {
  const selectedCourse = props.selectedCourse;
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/student/getByCourseName/${selectedCourse}`);
        setStudents(response.data.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, [selectedCourse]);

  const handleCheckboxClick = async (studentId) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/attendance/add`, {
        Student_id: studentId,
        CourseName: selectedCourse, 
      });
     
    } catch (error) {
      console.error("Error adding attendance data:", error);
    }
  };

  return (
    <div className='TrainerDashAttendancetable-attendance'>
      <div className='TrainerDashAttendance-table-title'>
        <h4>Student</h4>
        <h4>Attendance</h4>
      </div>
      <table className='TrainerDashAttendancetable'>
        <thead>
          <tr className="TrainerDashAttendanceTR">
            <th>Student Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="TrainerDashAttendanceTR">
              <td>{student.UserFullName}</td>
              <td>
                <input
                  type='checkbox'
                  value={student.User_id}
                  onClick={() => handleCheckboxClick(student.User_id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerDashAttendanceTable;