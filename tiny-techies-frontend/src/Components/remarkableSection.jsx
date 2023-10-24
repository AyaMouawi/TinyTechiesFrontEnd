import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RemarkableProject from './RemarkableProject';

const RemarkableSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/Projects/getRemarkableProjects')
      .then((response) => {
        setProjects(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='remarkable-wrapper'>
      <div className='remarkable-title'>
        <h1>Remarkable Projects</h1>
      </div>
      <div className='remarkable-container'>
        {projects.map((project) => (
          <RemarkableProject
            key={project.Project_id}
            StudentName={project.UserName}
            ProjectName={project.ProjectName}
            ProjectDesc={project.ProjectDescription}
            ProjectUrl={project.ProjectFile}
            StudentImage={project.StudentImage}
            StudentProject={project.StudentProject}
          />
        ))}
      </div>
    </div>
  );
};

export default RemarkableSection;