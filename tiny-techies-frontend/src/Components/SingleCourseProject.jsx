import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';
import SingleProjectCard from "./SingleProjectCard";
import ProjectForm from "./ProjectForm";
import "../css/SingleCourseProject.css";
import "../css/SingleCourseResponsive.css";
function SingleCourseProject() {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className='p-3'>
      <h1 className='text-center'> Your Projects</h1>

      <div className="text-center">
        <button className='btn' onClick={toggle}>
        Add a New Project
        </button>
        </div>
      <Modal isOpen={modal} toggle={toggle}  className='AssignmentModal'>
          <ModalHeader toggle={toggle} className='AssignmentModalHeader'><h2 className='assignment-content-title'>Submit A New Project</h2></ModalHeader>
          <ModalBody  className='AssignmentModalBody' >
            <div className='assignment-content'>
            <ProjectForm />
            </div>
          </ModalBody>

        </Modal>
      <div className='project-content'>
        
          <SingleProjectCard />
          <SingleProjectCard />
          <SingleProjectCard />
          <SingleProjectCard />
          <SingleProjectCard />
          <SingleProjectCard />
          
        
      </div>
     
         
        
    </div>
  );
}

export default SingleCourseProject;
