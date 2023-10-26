import React from "react";
import "../TrainerDashCSS/TrainerDashAttendanceTable.css";
const TrainerDashAttendanceTable = ({StudentName}) => {
  return (
    <div className='TrainerDashAttendancetable-attendance'>
      <div className='TrainerDashAttendance-table-title'>
        <h4>Student</h4>
        <h4> Attendance</h4>
      </div>
      <table className='TrainerDashAttendancetable'>
        <tr className="TrainerDashAttendanceTR">
          <td>{StudentName}</td>
          <td>
            <input type='checkbox' value='check' />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TrainerDashAttendanceTable;
