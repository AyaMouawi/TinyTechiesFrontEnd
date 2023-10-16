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
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt uit laborese eset
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Riesus commodo viverra
                  maecenas accumsan lacus vel facilisis.
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