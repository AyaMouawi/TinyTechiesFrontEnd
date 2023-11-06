import React, { useEffect, useState } from "react";
import "../css/CoursesPage.css";
import CourseRegister from "./CourseRegister";
import HeroAllCourses from "./HeroAllCourses";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [successMessageModal, setSuccessMessageModal] = useState(false);
  const [loginRequiredModal, setLoginRequiredModal] = useState(false);
  const [studentRoleRequiredModal, setStudentRoleRequiredModal] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/courses/getByStudent/${localStorage.getItem('userId')}`)
      .then((response) => {
        const courseData = response.data.data;
        setCourses(courseData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const openModal = (course) => {
    setSelectedCourse(course);
    toggleModal();
  };

  const enrollStudent = () => {
    if (selectedCourse) {
      const courseId = selectedCourse.Course_id;
      axios.post(`${process.env.REACT_APP_API_URL}/student/Enroll`, {
        Course_id: courseId,
        Student_id: localStorage.getItem('userId'),
      })
        .then((response) => {
          if (response.data.success) {
            setSuccessMessageModal(true);
            toggleModal();

            axios.get(`${process.env.REACT_APP_API_URL}/courses/getByStudent/${localStorage.getItem('userId')}`)
              .then((response) => {
                const courseData = response.data.data;
                setCourses(courseData);
              })
              .catch((error) => {
                console.error("Error fetching data: ", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error enrolling the student: ", error);
        });
    }
  };

  function handleCourseRegistration(course) {
 
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setLoginRequiredModal(true);
      return;
    }

  
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'Student') {
      setStudentRoleRequiredModal(true);
      return;
    }

  
    openModal(course);
  }


  const closeSuccessModal = () => {
    setSuccessMessageModal(false);
  };

  return (
    <>
      <NavBar />
      <div className="PageCourses-Wrapper">
       <HeroAllCourses/>
       <h1 className="OurCourses">Our Courses</h1>
        <div className="PageCourses">
          {courses.map((course) => {
            return (
              <CourseRegister
                key={course.Course_id}
                CourseImage={course.CourseImage}
                CourseName={course.CourseName}
                CourseDesc={course.CourseDescription}
                StudentCount={course.StudentCount}
                Duration={formatDuration(course.CourseStartTime, course.CourseEndTime)}
                onRegister={() => handleCourseRegistration(course)}
              />
            );
          })}
        </div>
      </div>

      <Modal isOpen={modal} toggle={toggleModal} centered className="RegisterModal">
        <ModalHeader toggle={toggleModal} className="RegConfirmation">You Sure You Want to Register ?</ModalHeader>
        <ModalBody>
          {selectedCourse && (
            <>
              <h5>{selectedCourse.CourseName}</h5>
              <p>{selectedCourse.CourseDescription}</p>
              <p>
                Duration: From {new Date(selectedCourse.CourseStartTime).toDateString()} To {new Date(selectedCourse.CourseEndTime).toDateString()}
              </p>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={enrollStudent} className="RegisterModalConfirm">
            Register
          </Button>
          <Button color="secondary" onClick={toggleModal} className="RegisterModalCancel">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={loginRequiredModal} centered>
        <ModalHeader toggle={() => setLoginRequiredModal(false)} className="RegConfirmation">
          Please log in first
        </ModalHeader>
        <ModalBody>
          You need to be logged in to register for courses.
        </ModalBody>
      </Modal>

      <Modal isOpen={studentRoleRequiredModal} centered>
        <ModalHeader toggle={() => setStudentRoleRequiredModal(false)} className="RegConfirmation">
          You should be a Student to register
        </ModalHeader>
        <ModalBody>
          You need to have the role of a student to register for courses.
        </ModalBody>
      </Modal>

      <Modal isOpen={successMessageModal} centered>
        <ModalHeader toggle={closeSuccessModal} className="RegConfirmation">Success</ModalHeader>
        <ModalBody>
          Registered Successfully, Champ
        </ModalBody>
      </Modal>
    </>
  );
};

export default CoursesPage;

function formatDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const startMonth = start.getMonth() + 1; 
  const endMonth = end.getMonth() + 1;

  return `from ${start.getDate()}/${startMonth} to ${end.getDate()}/${endMonth}`;
}
