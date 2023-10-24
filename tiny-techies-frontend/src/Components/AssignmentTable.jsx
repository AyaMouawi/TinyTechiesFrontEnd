import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function AssignmentTable() {
  const {CourseId } = useParams();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:8000/myAssignments/getGrade/${CourseId}/${localStorage.getItem('userId')}`)
      .then(response => {
        const data = response.data.data;
        setAssignments(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <div className='assignment-items '>
        <p className='assignment-subtitle'>Assignment</p>
        <p className='assignment-grades'>Grades</p>
      </div>
      <table className='assignment-table'>
        {assignments.map((assignment, index) => (
          <tr key={index}>
            <td>{assignment.AssignmentName}</td>
            <td>{assignment.Grade}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AssignmentTable;
