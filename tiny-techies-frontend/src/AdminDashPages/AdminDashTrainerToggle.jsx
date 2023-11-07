import React, { useState } from "react";
import AdminDashAddTrainer from "./AdminDashAddTrainer";
import AdminDashViewTrainers from "./AdminDashViewTrainers";
import "../AdminDashCSS/AdminDash.css";
const AdminDashTrainerToggle = () => {
  const [addTrainer, setAddTrainer] = useState(false);
  const [viewTrainer, setViewTrainer] = useState(false);

  const toggleAddTrainer = () => {
    setAddTrainer(!addTrainer);
    setViewTrainer(false);
  };

  const toggleViewTrainer = () => {
    setAddTrainer(false);
    setViewTrainer(!viewTrainer);
  };

  return (
    <div className="TrainerDashMainContainer">
      <div className='transitionbtns'>
        <button className='mainbuttons' onClick={toggleAddTrainer}>
          Add Trainer
        </button>

        <button className='mainbuttons' onClick={toggleViewTrainer}>
          View Trainers
        </button>
      </div>
      <div className='Admindash-toggle-center'>
        {addTrainer && <AdminDashAddTrainer />}
        {viewTrainer && <AdminDashViewTrainers />}
      </div>
    </div>
  );
};

export default AdminDashTrainerToggle;
