import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../TrainerDashCSS/TrainerDashAttendanceTable.css";

const TrainerDashAttendanceTable = (props) => {
  const selectedCourse = props.selectedCourse;
  const [students, setStudents] = useState([]);
  const [attendanceSaved, setAttendanceSaved] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/student/getByCourseName/${selectedCourse}`
        );
        setStudents(
          response.data.data.map((student) => ({
            ...student,
            attendance: null,
          }))
        );

        // Check if attendance has been saved for this course on the current date
        const savedDateKey = `attendanceSaved_${selectedCourse}_${new Date().toDateString()}`;
        const isAttendanceSavedToday = localStorage.getItem(savedDateKey);
        setAttendanceSaved(isAttendanceSavedToday === "true");
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, [selectedCourse]);

  const handleSetAttendance = (studentId, attendance) => {
    const updatedStudents = students.map((student) => {
      if (student.User_id === studentId) {
        return { ...student, attendance };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const handleSaveAttendance = async () => {
    if (attendanceSaved) {
      toast.warning(`Attendance for "${selectedCourse}" has already been saved today.`);
      return;
    }

    const absentStudents = students.filter((student) => student.attendance === "Absent");
    const presentStudents = students.filter((student) => student.attendance === "Present");

    for (const student of absentStudents) {
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/attendance/addAbsent`, {
          Student_id: student.User_id,
          CourseName: selectedCourse,
        });
      } catch (error) {
        console.error("Error adding absent attendance data:", error);
      }
    }

    for (const student of presentStudents) {
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/attendance/addPresence`, {
          Student_id: student.User_id,
          CourseName: selectedCourse,
        });
      } catch (error) {
        console.error("Error adding present attendance data:", error);
      }
    }

    // Mark attendance as saved for today in local storage
    const savedDateKey = `attendanceSaved_${selectedCourse}_${new Date().toDateString()}`;
    localStorage.setItem(savedDateKey, "true");

    setAttendanceSaved(true);
    toast.success(`Attendance in "${selectedCourse}" is taken successfully for ${new Date().toDateString()}`);
  };

  return (
    <div className="TrainerDashAttendancetable-attendance">
      {attendanceSaved ? (
        <p>Attendance for this course has been saved.</p>
      ) : (
        <div>
          <table className="TrainerDashAttendancetable">
            <thead>
              <tr className="TrainerDashAttendanceTR">
                <th>Student Name</th>
                <th>Absent</th>
                <th>Present</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className={`TrainerDashAttendanceTR ${index === students.length - 1 ? 'last-row' : ''}`}>
                  <td>{student.UserFullName}</td>
                  <td>
                    <input
                      type="radio"
                      name={`attendance_${student.User_id}`}
                      value="Absent"
                      checked={student.attendance === "Absent"}
                      onChange={() => handleSetAttendance(student.User_id, "Absent")}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      name={`attendance_${student.User_id}`}
                      value="Present"
                      checked={student.attendance === "Present"}
                      onChange={() => handleSetAttendance(student.User_id, "Present")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="AttendanceButton" onClick={handleSaveAttendance}>Save Attendance</button>
        </div>
      )}
    </div>
  );
};

export default TrainerDashAttendanceTable;
