import React from "react";
import "../css/DashWelcome.css";

function DashWelcomeTrainer() {
  return (
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

          <p>You Are Part Of 20 Course</p>
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
          <p>Working with 200 Student</p>
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
  );
}

export default DashWelcomeTrainer;
