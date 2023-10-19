import React from "react";
import { useState } from "react";
import Attendance from "../Dashpages/Attendance.jsx";

const DashSideBarButtons = () => {
  const [assignment, setAssignment] = useState(false);
  const [course, setCourse] = useState(false);
  const [attendance, setAttendance] = useState(false);

  const toggleAssignment = () => {
    setAssignment(!assignment);
    setAttendance(false);
    setCourse(false);
  };

  const toggleCourse = () => {
    setCourse(!course);
    setAssignment(false);
    setAttendance(false);
  };

  const toggleAttendance = () => {
    setAttendance(!attendance);
    setAssignment(false);
    setCourse(false);
  };
  return (
    <div>
      <button className='SideBarButton' onClick={toggleAssignment}>
        Assignment
      </button>
      <button className='SideBarButton' onClick={toggleAttendance}>
        Attendance
      </button>
      <button className='SideBarButton' onClick={toggleCourse}>
        Course
      </button>

      <div className='dash-toggle-center'>
        {/* {assignment && <DashAssignmet />}
        {grade && <DashGrade />} */}
        {attendance && <Attendance />}
      </div>
    </div>
  );
};

export default DashSideBarButtons;
