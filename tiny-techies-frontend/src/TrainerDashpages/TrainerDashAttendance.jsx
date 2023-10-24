import React from "react";
import TrainerDashAttendanceCourse from "../TrainerDashpages/TrainerDashAttendanceCourse";
import TrainerDashAttendanceTable from "../TrainerDashpages/TrainerDashAttendanceTable";

const TrainerDashAttendance = () => {
  return (
    <div className="TrainerDashMainContainer">
      <TrainerDashAttendanceCourse />
      <TrainerDashAttendanceTable />
    </div>
  );
};

export default TrainerDashAttendance;
