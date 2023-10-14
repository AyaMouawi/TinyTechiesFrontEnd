import React from "react";

function AssigmentTable() {
  return (
    <div>
      <h2 className='assignment-content-title'>Your Grades</h2>
      <div className='assignment-items '>
        <p className='assignment-subtitle'>Assignment</p>
        <p className='assignment-grades'>Grades</p>
      </div>
      <table className='assignment-table'>
        <tr>
          <td>Assignment</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Assignment</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Assignment</td>
          <td>C</td>
        </tr>
        <tr>
          <td>Assignment</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Assignment</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Assignment</td>
          <td>A</td>
        </tr>
      </table>
    </div>
  );
}

export default AssigmentTable;
