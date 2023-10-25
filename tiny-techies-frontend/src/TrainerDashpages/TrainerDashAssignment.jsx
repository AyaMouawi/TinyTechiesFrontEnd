import React, { useState, useEffect } from "react";
import "../TrainerDashCSS/TrainerDashAssignment.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const TrainerDashAssignment = () => {
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [zoomLink, setZoomLink] = useState("");
  const [assignmentName, setAssignmentName] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [assignmentRequirement, setAssignmentRequirement] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/courses/getCoursesByTrainerId/${localStorage.getItem('userId')}`)
      .then((response) => {
        setCourses(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, []);

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;
    setSelectedCourseId(selectedCourse);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Course_id", selectedCourseId);
    formData.append("ZoomLink", zoomLink);
    formData.append("AssignmentName", assignmentName);
    formData.append("MeetingDate", meetingDate);
    formData.append("AssignmentDueDate", dueDate);
    formData.append("AssignmentRequirement", assignmentRequirement);
    formData.append("file", assignmentFile);

    try {
      const response = await axios.post("http://localhost:8000/assignmentContent/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        toast.success("Assignment added successfully.");

        setSelectedCourseId("");
        setZoomLink("");
        setAssignmentName("");
        setMeetingDate("");
        setDueDate("");
        setAssignmentFile(null);
        setAssignmentRequirement("");
      } else {
        const errorMessage = response.data; 
        console.error("Error adding assignment:", errorMessage);
        toast.error("Error adding assignment. Please try again.");
      }
    } catch (error) {
      console.error("Error adding assignment:", error);
      toast.error("Error adding assignment. Please try again.");
    }
  };

  return (
    <div className='dash-assignment'>
      <h2 className='assignment-title'>Add Assignment</h2>
      <div className='assignment-input-list'>
        <form onSubmit={handleFormSubmit}>
          <div className='assignment-input'>
            <select
              value={selectedCourseId}
              onChange={handleCourseChange}
              className='assignment-select'
            >
              <option value=''>Your Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course.Course_id}>
                  {course.CourseName}
                </option>
              ))}
            </select>
          </div>
          <div className='assignment-input'>
            <input
              type='text'
              value={zoomLink}
              onChange={(e) => setZoomLink(e.target.value)}
              className='assignment-zoom'
              placeholder="Zoom Link"
            />
          </div>
          <div className='assignment-input'>
            <input
              type='text'
              value={assignmentName}
              onChange={(e) => setAssignmentName(e.target.value)}
              className='assignment-zoom'
              placeholder="Assignment Name"
            />
          </div>
          <div className='assignment-input-meeting'>
            <div className='TrainerDashAssignmentDates'>
              <div>
              <label htmlFor=''>Meeting Date</label>
              <input
                type='date'
                value={meetingDate}
                onChange={(e) => setMeetingDate(e.target.value)}
                className='meeting-date'
              /> </div>

               <div>
              <label htmlFor=''>Due Date</label>
              <input
                type='date'
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className='meeting-date'
              /> </div>
          
            </div>
          
          </div>
          <div className='TrainerDashAssignmentFile'>
            <label htmlFor=''>Assignment File</label>
            <input
              type='file'
              onChange={(e) => setAssignmentFile(e.target.files[0])}
              className=''
            />
          </div>
          <div className='assignment-input'>
            <label htmlFor=''>Assignment Requirements</label>
            <textarea
              value={assignmentRequirement}
              onChange={(e) => setAssignmentRequirement(e.target.value)}
              className='assignment-requirement'
            ></textarea>
          </div>
          <div className='assignment-input'>
            <button type='submit' className='assignment-btn-submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TrainerDashAssignment;
