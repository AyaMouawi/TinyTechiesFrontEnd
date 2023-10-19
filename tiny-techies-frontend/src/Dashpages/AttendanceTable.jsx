import React from "react";

import "../css/attendanceTable.css";
const AttendanceTable = () => {
  return (
    <div className='table-attendance'>
      <div className='attendance-table-title'>
        <h4>Student</h4>
        <h4> Attendance</h4>
      </div>
      <table className='table'>
        <tr>
          <td>student Name</td>
          <td>
            <input type='checkbox' value='check' />
          </td>
        </tr>
        <tr>
          <td>student Name</td>
          <td>
            <input type='checkbox' value='check' />
          </td>
        </tr>
        <tr>
          <td>student Name</td>
          <td>
            <input type='checkbox' value='check' />
          </td>
        </tr>
        <tr>
          <td>student Name</td>
          <td>
            <input type='checkbox' value='check' />
          </td>
        </tr>
        <tr>
          <td>student Name</td>
          <td>
            <input type='checkbox' value='check' />
          </td>
        </tr>
        <tr>
          <td>student Name</td>
          <td>
            <input type='checkbox' value='check' />
          </td>
        </tr>
        <tr>
          <td>student Name</td>
          <td>
            <input type='checkbox' name='check' value='check' />
          </td>
        </tr>
        <tr>
          <td>student Name</td>
          <td>
            <input type='checkbox' name='check' value='check' />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AttendanceTable;
