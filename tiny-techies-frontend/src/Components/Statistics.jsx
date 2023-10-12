import React from 'react';
import counter from "../images/counter-bg.jpg";
import book from "../images/book-open-reader-solid.svg";
import person from "../images/person-chalkboard-solid.svg";
import graduate from "../images/user-graduate-solid.svg";
import laptop from "../images/laptop-code-solid.svg";
import '../css/statics.css';

function Statistics() {
  return (
    <div className="statics-container">
      <div src={counter} className="counter-image">
        <div className="sub-stat-container">
          <div>
            <section className="image-section"> <img src={person} className="icon_stat" alt="book icon" /></section>
           
            <p>230</p>
            <button>Trainer</button>
          </div>
          <div>
          <section className="image-section"> <img src={graduate} className="icon_stat" alt="book icon" /></section>
            <p>230</p>
            <button>Student</button>
          </div>
        </div>

        <div className="sub-stat-container">
          <div>
          <section className="image-section"> <img src={book} className="icon_stat" alt="book icon" /></section>
            <p>230</p>
            <button>Courses</button>
          </div>
          <div>
          <section className="image-section"> <img src={laptop} className="icon_stat" alt="book icon" /></section>
            <p>230</p>
            <button>Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
