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
  const [searchCourseName, setSearchCourseName] = useState("");
  const [foundCourse, setFoundCourse] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [successMessageModal, setSuccessMessageModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/courses/getByStudent/${localStorage.getItem('userId')}`)
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

  const handleSearch = () => {
    axios.get(`http://localhost:8000/courses/getByName/${searchCourseName}`)
      .then((response) => {
        const courseData = response.data;
        setFoundCourse(courseData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setFoundCourse(null);
      });
  };

 

  const enrollStudent = () => {
    if (selectedCourse) {
      const courseId = selectedCourse.Course_id;
      axios.post("http://localhost:8000/student/Enroll", {
        Course_id: courseId,
        Student_id: localStorage.getItem('userId'),
      })
      .then((response) => {
        if (response.data.success) {
          setSuccessMessageModal(true);
          toggleModal();
          setTimeout(() => {
            setSuccessMessageModal(false);
          }, 3000); // 
        }
      })
      .catch((error) => {
        console.error("Error enrolling the student: ", error);
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="PageCourses-Wrapper">
       <HeroAllCourses/>
        <div className="PageCourses">
      
           { courses.map((course) => (
              <CourseRegister
                key={course.Course_id}
                CourseImage={course.CourseImage}
                CourseName={course.CourseName}
                CourseDesc={course.CourseDescription}
                StudentCount={course.StudentCount}
                Duration={formatDuration(course.CourseStartTime, course.CourseEndTime)}
                onRegister={() => openModal(course)} 
              />
            ))}
        
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

      {successMessageModal && (
        <Modal isOpen={successMessageModal} centered>
          <ModalBody>
            Registered Successfully, Champ
          </ModalBody>
        </Modal>
      )}
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