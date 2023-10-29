import React, { useEffect, useState } from "react";
import axios from "axios";
import "../AdminDashCSS/AdminDashStatistics.css";

function AdminDashStatistics() {

  const [data, setData] = useState({
    StudentCount: 0,
    TrainerCount: 0,
  });

  useEffect(() => {
    
    axios.get("http://localhost:8000/statistics/getCount")
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
    <div className="TrainerDashMainContainer">
    <div className='Welcome-Trainer-Dashboard-container'>
      <div className='SubWelcome-Trainer-Dashboard-container'>
        <div className='SubWelcome-Trainer-Dashboard-content'>
          <section className='image-section-dash'>
            {" "}
            <img
              src='/Images/person-chalkboard-solid.svg'
              className='icon_stat_Dash'
              alt='book icon'
            />
          </section>

          <p>You Are Part Of {data.TrainerCount} Trainer</p>
        </div>
        <div className='SubWelcome-Trainer-Dashboard-content'>
          <section className='image-section-dash'>
            {" "}
            <img
              src='/Images/user-graduate-solid.svg'
              className='icon_stat_Dash'
              alt='book icon'
            />
          </section>
          <p>Working with {data.StudentCount} Student</p>
        </div>
      </div>

      <div className='SubWelcome-Trainer-Dashboard-content third_Div'>
        <section className='image-section-dash'>
          {" "}
          <img
            src='/Images/book-open-reader-solid.svg'
            className='icon_stat_Dash'
            alt='book icon'
          />
        </section>
        <p>Tiny Techies Appreciate Your Work</p>
      </div>
    </div>
    </div>
  );
}

export default AdminDashStatistics;
