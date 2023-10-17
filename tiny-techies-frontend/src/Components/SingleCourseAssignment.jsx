import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SingleCourseAssignment.css';
import AssignmentCard from './AssignmentCard';
import AssignmentTable from './AssignmentTable';

const SingleCourseAssignment = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='p-3'>
      <div className='single-course-assignment'>
        <h1 className='text-center'>Your Assignments</h1>
        <div className="text-center">
        <button className='btn' onClick={toggle}>
          Show Your Grades
        </button>
        </div>
        <Modal isOpen={modal} toggle={toggle}  className='AssignmentModal'>
          <ModalHeader toggle={toggle} className='AssignmentModalHeader'><h2 className='assignment-content-title'>Your Grades</h2></ModalHeader>
          <ModalBody  className='AssignmentModalBody' >
            <div className='assignment-content'>
              <AssignmentTable />
            </div>
          </ModalBody>

        </Modal>
        <div className='single-course-assignment-nav'>
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
        </div>
     
      </div>
    </div>
  );
};

export default SingleCourseAssignment;