import React, { useState } from 'react';
import '../css/AboutUs.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function About() {
  const [loginRequiredModal, setLoginRequiredModal] = useState(false);
  const [studentRoleRequiredModal, setStudentRoleRequiredModal] = useState(false);

  const handleAccessCourses = () => {
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRole');

    if (!userId) {
      setLoginRequiredModal(true);
    } else if (userRole !== 'Student') {
      setStudentRoleRequiredModal(true);
    } else {
      window.location.href = '/MyCoursesPage';
    }
  };

  return (
    <div className="About-container" id="About-container">
      <div className="AboutImageContainer">
        <img src="Images/about-girl.png" className="About-girl" alt="About Girl" />
      </div>

      <div className="About-content">
        <h1>Know More About Us</h1>

        <div>
          <p className="About_P">Through hands-on experiences, your little techies will explore cutting-edge technologies,
            create their own projects, and learn to innovate like never before. We foster critical thinking, problem-solving,
            and creativity, equipping your kids with skills that will be invaluable in the future. Join us on this exciting journey
            of discovery and exploration. Your child's future begins here, at Tiny Techies.
          </p>
        </div>
        <p className="About_Question_P">Already One Of Us?</p>
        <div className="AboutUs-btn">
          <div className="AboutUs-main-btn">
            <button onClick={handleAccessCourses} className="About-btn">
              Access Your Courses
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={loginRequiredModal} centered className="About-modal">
        <ModalHeader toggle={() => setLoginRequiredModal(false)} className="RegConfirmation">
          Please log in first
        </ModalHeader>
        <ModalBody>
          You need to be logged in to access your courses.
        </ModalBody>
      </Modal>

      <Modal isOpen={studentRoleRequiredModal} centered className="About-modal">
        <ModalHeader toggle={() => setStudentRoleRequiredModal(false)} className="RegConfirmation">
          You should be a Student
        </ModalHeader>
        <ModalBody>
          You need to have the role of a student to access your courses.
        </ModalBody>
      </Modal>
    </div>
  );
}

export default About;
