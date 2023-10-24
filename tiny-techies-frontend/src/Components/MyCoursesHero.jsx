import React from "react";
import "../css/MyCoursesHero.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MyCoursesHero = () => {
  return (
    <div className="MyCoursesHeroContainer">
        <div className="MyCoursesHeroImageContainer">
          <img src="Images/about-girl.png" className="MyCoursesHeroImage" alt="" />
        </div>

        <div className="MyCoursesHeroDescription">
         <b className="MyCoursesHeroTitle">Congratulations On starting Your Courses</b>
            <h3 className="KeepLearning">KEEP LEARNING !! </h3>
            <p>Tiny Techies, your STEM adventure awaits! Dive into your courses, 
              tackle those assignments, and unleash your inner scientist, techie, 
              engineer, and math whiz. Each task is a step toward becoming a STEM hero. 
              Let's rock this, Tiny Techy  ! <br/>    🚀💡🔬👨‍🔬👩‍💻</p>     
        </div>

    </div>
 
  );
};

export default MyCoursesHero;
