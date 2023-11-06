import React, { useState, useEffect } from 'react';
import AdminDashAddcourse from './AdminDashAddcourse';
import AdminDashCourses from './AdminDashCourses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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

  const updateCourses = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/courses/getAllAdmin`)
      .then((response) => {
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
        toast.error('Error fetching courses');
      });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/courses/getAllAdmin`)
      .then((response) => {
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
        toast.error('Error fetching courses');
      });
  }, []);

  const handleDeleteCourse = (courseId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this course?');
    if (!shouldDelete) {
      return;
    }
    if (shouldDelete) {
      axios.delete(`${process.env.REACT_APP_API_URL}/courses/delete/${courseId}`)
        .then((response) => {
          if (response.data.success) {
            setCourses(courses.filter((course) => course.Course_id !== courseId));
          } else {
            toast.error('Error deleting course');
          }
        })
        .catch((error) => {
          console.error('Error deleting course:', error);
          toast.error('Error deleting course');
        });
    }
  };

  const handleEditCourse = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/courses/getAllAdmin`)
      .then((response) => {
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
        toast.error('Error fetching courses');
      });
  };

  return (
    <div className="TrainerDashMainContainer">
      
      <div className="transitionbtns">
        <button className="mainbuttons" onClick={toggleAddCourse}>
          Add Course
        </button>

        <button className="mainbuttons" onClick={toggleViewCourses}>
          View Courses
        </button>
      </div>
      <div className="dash-toggle-center">
        {addCourse && <AdminDashAddcourse updateCourses={updateCourses} />}
        {viewCourses && (
          <AdminDashCourses
            courses={courses}
            onDeleteCourse={handleDeleteCourse}
            onEditCourse={handleEditCourse}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminDashCourseToggle;
