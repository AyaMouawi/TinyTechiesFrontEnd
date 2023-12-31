import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/SingleCourseAssignment.css';
import AssignmentCard from './AssignmentCard';
import AssignmentTable from './AssignmentTable';
import { useParams } from "react-router-dom";
import axios from 'axios'; 

const SingleCourseAssignment = () => {
  const { CourseId } = useParams();
  const [modal, setModal] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    
    fetchAssignments();
  }, [assignments]);

  function formatDueDate(dueDate) {
    const date = new Date(dueDate);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  function formatZoomDate(zoomDate) {
    const date = new Date(zoomDate);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const fetchAssignments = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/myAssignments/get/${CourseId}/${localStorage.getItem('userId')}`)
      .then(response => {
        const data = response.data.data;
        setAssignments(data);
      })
      .catch(error => {
        console.error('Error fetching assignment data:', error);
      });
  };

  return (
    <div className='p-3' id='SingleAssignment'>
      <div className='single-course-assignment'>
        <h1 className='text-center'>Your Assignments</h1>
        <div className="text-center">
          <button className='btnSingleCourse' onClick={toggle}>
            Show Your Grades
          </button>
        </div>
        <Modal isOpen={modal} toggle={toggle} className='AssignmentModal'>
          <ModalHeader toggle={toggle} className='AssignmentModalHeader'>
            <h2 className='assignment-content-title'>Your Grades</h2>
          </ModalHeader>
          <ModalBody className='AssignmentModalBody'>
            <div className='assignment-content'>
              <AssignmentTable />
            </div>
          </ModalBody>
        </Modal>
        <div className='single-course-assignment-nav'>
          {assignments.map((assignment, index) => (
            <AssignmentCard
              key={index}
              AssignmentName={assignment.AssignmentName}
              AssignmentDesc={assignment.AssignmentRequirement}
              FileUrl={assignment.AssignmentFile}
              ZoomUrl={assignment.ZoomLink}
              ZoomDate={formatZoomDate(assignment.MeetingDate)} 
              DueDate={formatDueDate(assignment.AssignmentDueDate)}
              AssignmentID={assignment.AssignmentContent_id} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCourseAssignment;
