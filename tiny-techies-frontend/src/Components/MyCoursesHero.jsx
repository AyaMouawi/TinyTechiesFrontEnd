import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/MyCoursesHero.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MyCoursesHero = ({ StudentName }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:8000/user/get/${localStorage.getItem('userId')}`;

    axios.get(apiUrl)
      .then((response) => {
        setUserData(response.data.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="MyCoursesHeroContainer">
      <div className="MyCoursesHeroImageContainer">
        <img src="Images/about-girl.png" className="MyCoursesHeroImage" alt="" />
      </div>

      <div className="MyCoursesHeroDescription">
        <b className="MyCoursesHeroTitle">Congratulations On starting Your Courses</b>
        <h3 className="KeepLearning">KEEP LEARNING !! </h3>
        {userData && (
          <p>
            Hello {userData.UserFullName}, your STEM adventure awaits! Dive into your courses, 
            tackle those assignments, and unleash your inner scientist, techie, 
            engineer, and math whiz. Each task is a step toward becoming a STEM hero. 
            Let's rock this, Tiny Techy  ! <br/>    🚀💡🔬👨‍🔬👩‍💻
          </p>
        )}
      </div>
    </div>
  );
};

export default MyCoursesHero;
