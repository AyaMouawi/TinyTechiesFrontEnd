import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashAddRemarkableProjects from "./AdminDashAddRemarkableProjects";
import '../css/remarkableSection.css';
import '../AdminDashCSS/AdminDash.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashRemarkableSection = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [checkedProjects, setCheckedProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects/getAllProjects`);
        setProjectsData(response.data.data);
        setCheckedProjects(response.data.data.filter((project) => project.ShowProject).map((project) => project.Project_id));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

 
  const handleDeleteProject = (projectId) => {
   
    setProjectsData((prevProjectsData) => prevProjectsData.filter((project) => project.Project_id !== projectId));

  
    toast.success(`${projectsData.find((project) => project.Project_id === projectId).ProjectName} deleted successfully`);
  };

  const handleShowProjectChange = async (id, showProject, projectName) => {
    if (showProject && checkedProjects.length >= 3) {
      toast.error('You can only show 3 projects');
      return;
    }

    try {
      const url = showProject
        ? `${process.env.REACT_APP_API_URL}/projects/updateShow/${id}`
        : `${process.env.REACT_APP_API_URL}/projects/updateUnShow/${id}`;

      await axios.put(url);

      setProjectsData((prevProjectsData) => {
        return prevProjectsData.map((project) => {
          if (project.Project_id === id) {
            return { ...project, ShowProject: showProject };
          }
          return project;
        });
      });

      if (showProject) {
        setCheckedProjects([...checkedProjects, id]);
      } else {
        setCheckedProjects(checkedProjects.filter((projectId) => projectId !== id));
      }

      toast.success(
        showProject
          ? `${projectName} Added To Home Page`
          : `${projectName} Removed From Home Page`,
      );
    } catch (error) {
      console.error("Unable to update ShowProject: ", error);
      toast.error('Error updating the project status');
    }
  };

  return (
    <div className='AdminprojectWrap'>
      {projectsData.map((project) => (
        <AdminDashAddRemarkableProjects
          key={project.Project_id}
          StudentName={project.UserName}
          ProjectName={project.ProjectName}
          ProjectDesc={project.ProjectDescription}
          ProjectUrl={project.ProjectFile}
          StudentImage={project.StudentImage}
          StudentProject={project.StudentProject}
          showProject={project.ShowProject}
          onShowProjectChange={() =>
            handleShowProjectChange(project.Project_id, !project.ShowProject, project.ProjectName)
          }
          onDeleteProject={handleDeleteProject} 
        />
      ))}
      <ToastContainer />
    </div>
  );
};

export default AdminDashRemarkableSection;