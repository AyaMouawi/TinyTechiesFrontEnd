import React, { useState } from "react";
import "../TrainerDashCSS/TrainerDashAssignment.css";
import axios from "axios";

const TrainerDashAssignment = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [zoomLink, setZoomLink] = useState("");
  const [assignmentName, setAssignmentName] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [assignmentRequirement, setAssignmentRequirement] = useState("");

  const courses = ["Course 1", "Course 2", "Course 3", "Course 4"];

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  // Function to handle adding an assignment
  const handleAddAssignment = async () => {
    // Check if the required fields are not empty
    if (
      selectedCourse === "" ||
      zoomLink === "" ||
      assignmentName === "" ||
      meetingDate === "" ||
      dueDate === "" ||
      !assignmentFile ||
      assignmentRequirement === ""
    ) {
      console.error("Please fill in all the required fields.");
      return;
    }

    const assignmentData = new FormData();
    assignmentData.append("AssignmentDueDate", dueDate);
    assignmentData.append("ZoomLink", zoomLink);
    assignmentData.append("MeetingDate", meetingDate);
    assignmentData.append("AssignmentRequirement", assignmentRequirement);
    assignmentData.append("AssignmentName", assignmentName);
    assignmentData.append("CourseName", selectedCourse); // Sending course name

    // Append the selected file to the form data
    assignmentData.append("file", assignmentFile);

    try {
      // Send a POST request to add the assignment
      const response = await axios.post("http://localhost:8000/assignmentContent/add", assignmentData);

      if (response.status === 201) {
        console.log("Data added successfully");
        // Optionally, reset the form or perform any other action upon successful data addition
      } else {
        console.error("Error adding data.");
      }
    } catch (error) {
      console.error("Error during data addition:", error);
    }
  };

  return (
    <div className="dash-assignment">
      <h2 className="assignment-title">Add Assignment</h2>
      <div className="assignment-input-list">
        <div className="assignment-input">
          <select
            value={selectedCourse}
            onChange={handleCourseChange}
            className="assignment-select"
          >
            <option value="">Your Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className="assignment-input">
          <label htmlFor="assignment-zoom">Zoom Link</label>
          <input
            type="text"
            id="assignment-zoom"
            placeholder="Zoom Link"
            value={zoomLink}
            onChange={(e) => setZoomLink(e.target.value)}
          />
        </div>
        <div className="assignment-input">
          <label htmlFor="assignment-name">Assignment Name</label>
          <input
            type="text"
            id="assignment-name"
            placeholder="Assignment Name"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
        </div>
        <div className="assignment-input-meeting">
          <div className="TrainerDashAssignmentDates">
            <label htmlFor="meeting-date">Meeting Date</label>
            <input
              type="date"
              id="meeting-date"
              value={meetingDate}
              onChange={(e) => setMeetingDate(e.target.value)}
            />
          </div>
          <div className="TrainerDashAssignmentDates">
            <label htmlFor="due-date">Due Date</label>
            <input
              type="date"
              id="due-date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>
        <div className="TrainerDashAssignmentFile">
          <label htmlFor="assignment-file">Assignment File</label>
          <input
            type="file"
            id="assignment-file"
            onChange={(e) => setAssignmentFile(e.target.files[0])}
          />
        </div>
        <div className="assignment-input">
          <label htmlFor="assignment-requirement">Assignment Requirements</label>
          <textarea
            id="assignment-requirement"
            value={assignmentRequirement}
            onChange={(e) => setAssignmentRequirement(e.target.value)}
          ></textarea>
        </div>
      </div>

      <button
        type="button"
        className="assignment-btn-submit"
        onClick={handleAddAssignment}
      >
        Submit
      </button>
    </div>
  );
};

export default TrainerDashAssignment;
