import '../css/AboutUs.css';
function About() {
  return (
    <div >
      <div className="About-container" id="About-container">
<div className='"AboutImageContainer'><img src="Images/about-girl.png" className="About-girl" ></img></div>
      

        <div className="About-content">
        <h1>Know More About Us</h1>

        <div><p className="About_P">Consectetur adipisicing elit, sed do eiusmod tempor incididunt
         ut labore et dolore magna aliqua. Ut enim ad minim veniam, quies nostrud 
         exercitateion ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eeu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
           sunt ien culpa qui officia deserunt mollit anim id est laborum. </p>
        </div> <p className="About_Question_P"> Already One Of Us ?</p>
        <div className="AboutUs-btn">
                  <div className="AboutUs-main-btn">
                    <a href="/MyCoursesPage" className="About-btn">
                      Access Your Courses
                    </a>
                  </div>
                </div>
        </div>

        </div>

    </div>
  );
}

export default About;
