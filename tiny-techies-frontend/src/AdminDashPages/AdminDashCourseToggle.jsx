import React, { useState, useEffect } from 'react';
import AdminDashAddcourse from './AdminDashAddcourse';
import AdminDashCourses from './AdminDashCourses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashCourseToggle = () => {
  const [addCourse, setAddCourse] = useState(false);
  const [viewCourses, setViewCourses] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleAddCourse = () => {
    setAddCourse(!addCourse);
    setViewCourses(false);
  };

  const toggleViewCourses = () => {
    setAddCourse(false);
    setViewCourses(!viewCourses);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/courses/getAllAdmin`)
      .then((response) => response.json())
      .then((data) => setCourses(data.data))
      .catch((error) => {
        console.error('Error fetching courses:', error);
        toast.error('Error fetching courses');
      });
  }, []);

  const handleDeleteCourse = (courseId) => {
    fetch(`${process.env.REACT_APP_API_URL}/courses/delete/${courseId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success('Course Deleted Successfully', { autoClose: 2000 });
          setCourses(courses.filter((course) => course.Course_id !== courseId));
        } else {
          toast.error('Error deleting course');
        }
      })
      .catch((error) => {
        console.error('Error deleting course:', error);
        toast.error('Error deleting course');
      });
  };

  const handleEditCourse = () => {
    fetch(`${process.env.REACT_APP_API_URL}/courses/getAllAdmin`)
      .then((response) => response.json())
      .then((data) => setCourses(data.data))
      .catch((error) => {
        console.error('Error fetching courses:', error);
        toast.error('Error fetching courses');
      });
  };

  return (
    <div className="TrainerDashMainContainer">
      <ToastContainer />
      <div className="transitionbtns">
        <button className="mainbuttons" onClick={toggleAddCourse}>
          Add Course
        </button>

        <button className="mainbuttons" onClick={toggleViewCourses}>
          View Courses
        </button>
      </div>
      <div className="dash-toggle-center">
        {addCourse && <AdminDashAddcourse />}
        {viewCourses && (
          <AdminDashCourses
            courses={courses}
            onDeleteCourse={handleDeleteCourse}
            onEditCourse={handleEditCourse}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashCourseToggle;
