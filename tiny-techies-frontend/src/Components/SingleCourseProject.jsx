import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import SingleProjectCard from './SingleProjectCard';
import ProjectForm from './ProjectForm';
import { useParams } from "react-router-dom";
import '../css/SingleCourseProject.css';
import '../css/SingleCourseResponsive.css';


function SingleCourseProject() {
  const {CourseId } = useParams();
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/projects/getStudentProjects/${CourseId}/${localStorage.getItem('userId')}`)
      .then(response => {
        const data = response.data.data;
        setProjects(data);
     
      })
      
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="p-3" id='SingleProjects'>
      <h1 className="text-center">Your Projects</h1>

      <div className="text-center">
        <button className="btnSingleCourse" onClick={toggle}>
          Add a New Project
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="AssignmentModal">
        <ModalHeader toggle={toggle} className="AssignmentModalHeader">
          <h2 className="assignment-content-title">Submit A New Project</h2>
        </ModalHeader>
        <ModalBody className="AssignmentModalBody">
          <div className="assignment-content">
            <ProjectForm />
          </div>
        </ModalBody>
      </Modal>
      <div className="project-content">
        {projects.map(project => (
          <SingleProjectCard
            key={project.Project_id}
            StudentImage={project.StudentImage}
            StudentName={project.UserName}
            ProjectName={project.ProjectName}
            ProjectDesc={project.ProjectDescription}
            StudentProject={project.StudentProject} 
            ProjectUrl={project.ProjectFile} 
          />
        ))}
      </div>
  
    </div>
  );
}

export default SingleCourseProject;
