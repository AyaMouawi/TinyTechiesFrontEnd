import React from 'react';
import "../css/Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";


const HeroSection = () => {
    return (
      <div className="HeroSection-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="HeroSection-left">
                <h4 className='HeroSection-Title'>welcome to tiny techies</h4>
                <h1 className='HeroSection-Title'>better future for your kids</h1>
                <p className='HeroSection-Description'>
                We nurture your child's natural curiosity and channel it towards the fascinating world 
                of STEM (Science, Technology, Engineering, and Mathematics) Together, we're shaping the leaders and change-makers of tomorrow, 
                building a better world for all..
                </p>
                <div className="HeroSection-btn">
                  <div className="HeroSection-main-btn">
                    <a href="/CoursesPage" className="Hero-btn">
                      start taking courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;