import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../AdminDashCSS/AdminDashStatistics.css";

function AdminDashStatistics() {
  const [data, setData] = useState( {
    StudentCount: 0,
    CoursesCount: 0
  });
  const api = "http://localhost:8000/statistics/getCount";
  
  useEffect(() => {
    axios.get(api)
      .then((response) => {
        const { data } = response.data; {
          setData({ 
            StudentCount: data.StudentCount,
            CoursesCount: data.CoursesCount
          }); 
   } })
      .catch((error) => {
        console.error(error);
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
              src='/Images/book-open-reader-solid.svg'
              className='icon_stat_Dash'
              alt='book icon'
            />
          </section>

          <p>You Are Part Of {data.CoursesCount} Course</p>
        </div>
        <div className='SubWelcome-Trainer-Dashboard-content'>
          <section className='image-section-dash'>
            {" "}
            <img
              src='/Images/book-open-reader-solid.svg'
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
