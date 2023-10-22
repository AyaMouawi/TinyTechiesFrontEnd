import React, { useState } from "react";
import DashAssignmet from "./DashAssignmet";
import DashGrade from "./DashGrade";
// css
import "../css/DashToggle.css";
const DashToggles = () => {
  const [assignment, setAssignment] = useState(false);
  const [grade, setGrade] = useState(false);

  const toggleAssignment = () => {
    setAssignment(!assignment);
    setGrade(false);
  };

  const toggleGrade = () => {
    setAssignment(false);
    setGrade(!grade);
  };

  return (
    <div>
      <div className='dash-toggle-btn'>
        <button className='assignment-toggle-btn' onClick={toggleAssignment}>
          Add Assignment
        </button>

        <button className='grade-toggle-btn' onClick={toggleGrade}>
          Grades Assignment
        </button>
      </div>
      <div className='dash-toggle-center'>
        {assignment && <DashAssignmet />}
        {grade && <DashGrade />}
      </div>
    </div>
  );
};

export default DashToggles;
