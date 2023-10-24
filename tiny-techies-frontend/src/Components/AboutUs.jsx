import '../css/AboutUs.css';
function About() {
  return (
    <div >
      <div className="About-container" id="About-container">
<div className='"AboutImageContainer'><img src="Images/about-girl.png" className="About-girl" ></img></div>
      

        <div className="About-content">
        <h1>Know More About Us</h1>

        <div><p className="About_P">Through hands-on experiences, your little techies will explore cutting-edge technologies, 
        create their own projects, and learn to innovate like never before We foster critical thinking, problem-solving, and creativity,
       equipping your kids with skills that will be invaluable in the future Join us on this exciting journey of discovery and exploration.
        Your child's future begins here, at Tiny Techies.</p>
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
