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
            <p>You Have 10 Courses And 3 Assignments</p>     
        </div>

    </div>
 
  );
};

export default MyCoursesHero;
