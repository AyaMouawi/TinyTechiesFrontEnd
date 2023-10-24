import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/statistics.css';

function Statistics() {
  const [data, setData] = useState({
    TrainerCount: 0,
    StudentCount: 0,
    CoursesCount: 0,
    ProjectCount: 0,
  });

  useEffect(() => {
    // Make an Axios request to fetch data from the API
    axios.get('http://localhost:8000/statistics/getCount')
      .then(response => {
        const { data } = response.data;
        setData({
          TrainerCount: data.TrainerCount,
          StudentCount: data.StudentCount,
          CoursesCount: data.CoursesCount,
          ProjectCount: data.ProjectCount,
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="statics-container">
      <div className="counter-image">
        <div className="sub-stat-container">
          <div>
            <section className="image-section">
              <img src="/Images/person-chalkboard-solid.svg" className="icon_stat" alt="book icon" />
            </section>
            <p>{data.TrainerCount}</p>
            <button>Trainer</button>
          </div>
          <div>
            <section className="image-section">
              <img src="/Images/user-graduate-solid.svg" className="icon_stat" alt="book icon" />
            </section>
            <p>{data.StudentCount}</p>
            <button>Student</button>
          </div>
        </div>

        <div className="sub-stat-container">
          <div>
            <section className="image-section">
              <img src="/Images/book-open-reader-solid.svg" className="icon_stat" alt="book icon" />
            </section>
            <p>{data.CoursesCount}</p>
            <button>Courses</button>
          </div>
          <div>
            <section className="image-section">
              <img src="/Images/laptop-code-solid.svg" className="icon_stat" alt="book icon" />
            </section>
            <p>{data.ProjectCount}</p>
            <button>Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
