import React from 'react';
import axios from 'axios'; 
import '../css/remarkableSection.css';

const AdminDashAddRemarkableProjects = ({
  StudentName,
  ProjectName,
  ProjectDesc,
  ProjectUrl,
  StudentImage,
  StudentProject,
  showProject,
  onShowProjectChange,
  onDeleteProject,
  
}) => {

  

  return (
    <div className='remarkable-card AdminCard'>
      <div className="video-container">
        <video controls className='videoRemarkable'>
          <source src={StudentProject} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='remarkable-card-title'>
        <img src={StudentImage} alt="beside name" className='remarkable-card-image-name' />
        <div className='card-des'>
          <p className='card-title'>{StudentName}</p>
          <p className='card-subTitle'>{ProjectName}</p>
        </div>
      </div>
      <h4 className='remarkable-card-des'>{ProjectDesc}</h4>
      <a href={ProjectUrl} target="_blank" rel="noopener noreferrer" className='remarkable-card-des'>
        See My project
      </a>
      <div className='ProjectShowCheckbox'>
        <p>Show</p>
        <input
          type="checkbox"
          className='ProjectInputCheckbox'
          checked={showProject}
          onChange={onShowProjectChange}
        />
      </div>
      <div>  <img className="TrashRemarkableSection" src="Images/trash-solid.svg" alt="Delete" onClick={onDeleteProject} /> </div>
    </div>
  );
};

export default AdminDashAddRemarkableProjects;
