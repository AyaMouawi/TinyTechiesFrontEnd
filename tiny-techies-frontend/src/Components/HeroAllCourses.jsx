import React from "react";
import "../css/AllCoursesHero.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroAllCourses = () => {
  return (
    <div className="AllCoursesHeroContainer">
        <div className="AllCoursesHeroImageContainer">
          <img src="Images/about-girl.png" className="AllCoursesHeroImage" alt="" />
        </div>
        
        <div className="AllCoursesHeroDescription">
         <b className="AllCoursesHeroTitle">What Are You Waiting For ? </b>
            <h3 className="StartLearning">START REGISTERING !! </h3>
            <p>Hey there, future scientists, engineers, and inventors! 🚀
                 Are you ready to embark on an awesome adventure with Tiny Techies? Our e-learning website is 
                 a magical place where you can learn about cool stuff like robots, space, and all things STEM.
                  Join us, and you'll discover the secrets of the universe, build amazing machines, and have a 
                  blast while doing it! Enroll in our courses today, and let's explore, create, and learn together.
                   Get ready for an exciting journey with Tiny Techies - where every day is a new chance to be 
                   a STEM superstar! <br/>💫🌟🌈 
            </p>     
        </div>
        
    </div>
 
  );
};

export default HeroAllCourses;
