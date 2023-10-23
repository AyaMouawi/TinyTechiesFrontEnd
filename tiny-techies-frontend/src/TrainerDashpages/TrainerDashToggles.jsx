import React, { useState } from "react";
import TrainerDashAssignment from "./TrainerDashAssignment";
import TrainerDashGrade from "./TrainerDashGrade";
// css
import "../TrainerDashCSS/TrainerDashToggle.css";
const TrainerDashToggles = () => {
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
    <div className="TrainerDashMainContainer">
      <div className='dash-toggle-btn'>
        <button className='assignment-toggle-btn' onClick={toggleAssignment}>
          Add Assignment
        </button>

        <button className='grade-toggle-btn' onClick={toggleGrade}>
          Grades Assignment
        </button>
      </div>
      <div className='dash-toggle-center'>
        {assignment && <TrainerDashAssignment />}
        {grade && <TrainerDashGrade />}
      </div>
    </div>
  );
};

export default TrainerDashToggles;
