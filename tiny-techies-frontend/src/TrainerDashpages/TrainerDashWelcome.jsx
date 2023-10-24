import React from "react";
import "../TrainerDashCSS/TrainerDashWelcome.css";

function TrainerDashWelcomeTrainer() {
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

          <p className="DashTrainerStat">You Are Part Of 20 Course</p>
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
          <p className="DashTrainerStat">Working with 200 Student</p>
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
        <p className="DashTrainerStat">Tiny Techies Appreciate Your Work</p>
      </div>
    </div>
  );
}

export default TrainerDashWelcomeTrainer;
