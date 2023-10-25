import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const ProjectForm = () => {
  const {CourseId } = useParams();
  const [formState, setFormState] = useState({
    ProjectName: "",
    StudentImage: null,
    ProjectFile: null,
    ProjectVideo: null,
    ProjectDescription: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Student_id", localStorage.getItem('userId'));
    formData.append("Course_id", CourseId);
    formData.append("ProjectName", formState.ProjectName);
    formData.append("ProjectDescription", formState.ProjectDescription);
    formData.append("ShowProject", formState.ProjectVideo ? 1 : 0);

    if (formState.StudentImage) {
      formData.append("image", formState.StudentImage);
    }
    if (formState.ProjectFile) {
      formData.append("file", formState.ProjectFile);
    }
    if (formState.ProjectVideo) {
      formData.append("project", formState.ProjectVideo);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/projects/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setFormState({
        ProjectName: "",
        StudentImage: null,
        ProjectFile: null,
        ProjectVideo: null,
        ProjectDescription: "",
      });

      setSuccessMessage("Thank you! Data added successfully.");

      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);

      toast.success("Good job, Buddy", { autoClose: 5000 });

      console.log("Data added successfully:", response.data);
    } catch (error) {
      console.error("Unable to add data:", error);
      setSuccessMessage("Unable to add data. Please try again.");
      toast.error("Oops, something went wrong!", { autoClose: 5000 });
    }
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormState({ ...formState, [field]: file });
  };

  const handleChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  return (
    <div className="project-form-content">
      <form onSubmit={handleSubmit}>
        <div className="project-input">
          <label htmlFor="ProjectName">Project Name</label>
          <input
            type="text"
            value={formState.ProjectName}
            onChange={(e) => handleChange(e, "ProjectName")}
          />
        </div>
        <div>
          <div className="project-form">
            <label htmlFor="ProjectFile">Project File</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "ProjectFile")}
            />
          </div>
          <div className="project-form">
            <label htmlFor="StudentImage">Student Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "StudentImage")}
            />
          </div>
          <div className="project-form">
            <label htmlFor="ProjectVideo">Project Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => handleFileChange(e, "ProjectVideo")}
            />
          </div>
        </div>
        <div className="project-input">
          <label htmlFor="ProjectDescription">Project Description</label>
          <textarea
            placeholder="Remember, be nice!"
            cols="30"
            rows="5"
            value={formState.ProjectDescription}
            onChange={(e) => handleChange(e, "ProjectDescription")}
          ></textarea>
        </div>
        <div className="btn-submit">
          <button type="submit" className="project-form-btn-submit">
            Submit
          </button>
        </div>
      </form>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
};

export default ProjectForm;
