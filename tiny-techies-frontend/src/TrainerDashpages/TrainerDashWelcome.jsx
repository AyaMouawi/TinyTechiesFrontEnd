import React, { useEffect, useState } from "react";
import axios from "axios";
import "../TrainerDashCSS/TrainerDashWelcome.css";

function TrainerDashWelcomeTrainer() {
  const [data, setData] = useState({
    StudentCount: 0,
    TrainerCount: 0,
  });

  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_API_URL}/statistics/getCount`)
      .then((response) => {
        if (response.data && response.data.success) {
          setData({
            StudentCount: response.data.data.StudentCount,
            TrainerCount: response.data.data.TrainerCount,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <div className="Welcome-Trainer-Dashboard-container">
      <div className="SubWelcome-Trainer-Dashboard-container">
        <div className="SubWelcome-Trainer-Dashboard-content">
          <section className="image-section-dash">
            <img
              src="/Images/person-chalkboard-solid.svg"
              className="icon_stat_Dash"
              alt="book icon"
            />
          </section>
          <p className="DashTrainerStat">You Are Part Of {data.TrainerCount} Trainer</p>
        </div>
        <div className="SubWelcome-Trainer-Dashboard-content">
          <section className="image-section-dash">
            <img
              src="/Images/user-graduate-solid.svg"
              className="icon_stat_Dash"
              alt="book icon"
            />
          </section>
          <p className="DashTrainerStat">Working with {data.StudentCount} Student</p>
        </div>
      </div>
      <div className="SubWelcome-Trainer-Dashboard-content third_Div">
        <section className="image-section-dash">
          <img
            src="/Images/book-open-reader-solid.svg"
            className="icon_stat_Dash"
            alt="book icon"
          />
        </section>
        <p className="DashTrainerStat">Tiny Techies Appreciate Your Work</p>
      </div>
    </div>
  );
}

export default TrainerDashWelcomeTrainer;
