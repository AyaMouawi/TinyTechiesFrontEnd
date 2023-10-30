import React, { useRef, useState } from "react";
import axios from 'axios'; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssignmentCard = ({ AssignmentName, AssignmentDesc,FileUrl, ZoomUrl, ZoomDate, DueDate, AssignmentID,}) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState('');
  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };
  const handleFileSelected = async (event) => {
    const selectedFile = event.target?.files[0];
    setSelectedFile(selectedFile)}

  const SubmitFileSelected = async () => {
  
    if (!selectedFile) {
 
      return;
    }

    const formData = new FormData();
    formData.append('AssignmentContent_id', AssignmentID); 
    formData.append('Student_id', localStorage.getItem('userId')); 
    formData.append('file', selectedFile);

    try {
    
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/myAssignments/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      toast.success("Great Job Buddy");
      console.log(response.data);

    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };



  

  return (
    <div>
      <div className="card">
        <img src="/Images/b1.jpg" className="card-img-top" alt="card-sora" />
        <div className="card-body">
          <h5 className="card-title" style={{ overflow: "hidden" }}>
            {AssignmentName}
          </h5>
          <p className="card-text">{AssignmentDesc}</p>
          <a href={FileUrl} target="_blank" className="card-text">
            <p className="card-text">Access The Assignment File</p>
          </a>
          <a href={ZoomUrl} target="_blank" className="card-text">
            <p className="card-text">Zoom Link</p>
          </a>
          <p className="card-text">Zoom Date: {ZoomDate}</p>

          <hr />
          <div className="assignment-card-time">
            <img
              src="/Images/clock-regular.svg"
              alt="icon"
              className="assignment-card-icon"
            />
            <p>{DueDate}</p>
          </div>

          <div className="d-flex justify-content-evenly">
            <button className="btnSingleCourse" onClick={handleChooseFileClick}>
              Choose File
            </button>
            <button className="btnSingleCourse"  onClick={SubmitFileSelected}>Submit</button>
          </div>

          {/* Hidden file input element */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelected}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AssignmentCard;