import React from 'react';

import '../css/statics.css';

function Statistics() {
  return (
    <div className="statics-container">
      <div src="/Images/person-chalkboard-solid.svg" className="counter-image">
        <div className="sub-stat-container">
          <div>
            <section className="image-section"> <img src="/Images/person-chalkboard-solid.svg" className="icon_stat" alt="book icon" /></section>
           
            <p>230</p>
            <button>Trainer</button>
          </div>
          <div>
          <section className="image-section"> <img src="/Images/user-graduate-solid.svg" className="icon_stat" alt="book icon" /></section>
            <p>230</p>
            <button>Student</button>
          </div>
        </div>

        <div className="sub-stat-container">
          <div>
          <section className="image-section"> <img src="/Images/book-open-reader-solid.svg" className="icon_stat" alt="book icon" /></section>
            <p>230</p>
            <button>Courses</button>
          </div>
          <div>
          <section className="image-section"> <img src="/Images/laptop-code-solid.svg" className="icon_stat" alt="book icon" /></section>
            <p>230</p>
            <button>Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
