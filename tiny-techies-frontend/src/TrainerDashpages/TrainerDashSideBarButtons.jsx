import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TrainerDashCoursesPage from "../TrainerDashpages/TrainerDashCoursesPage.jsx";
import TrainerDashAttendance from "../TrainerDashpages/TrainerDashAttendance.jsx";
import TrainerDashWelcome from "../TrainerDashpages/TrainerDashWelcome.jsx";
import TrainerDashAssignment from "../TrainerDashpages/TrainerDashToggles.jsx";


import "../TrainerDashCSS/TrainerDashboard.css";
const TrainerDashboardButtons = () => {
  const [activePage, setActivePage] = useState("TrainerDashWelcome");
  const navigate = useNavigate();

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    navigate('/');
  };



  return (
    <div className='SideBarContainer'>
      <div className='SideBarButtons'>
      <a className="PagesLink"
           href='#TrainerDashWelcome' onClick={() => handleMenuClick("TrainerDashWelcome")}>
        <div className='SideBarButton'>
         
            Statistics
         
        </div>
        </a>
      <a className="PagesLink"
            href='#TrainerDashassignment'
            onClick={() => handleMenuClick("TrainerDashassignment")}
          >
        <div className='SideBarButton'>
         
            Assignment
          
        </div>
        </a>
        <a className="PagesLink"
           href='#TrainerDashAttendance' onClick={() => handleMenuClick("TrainerDashAttendance")}>
        <div className='SideBarButton'>
          
            Attendance
          
        </div>
        </a>
        <a className="PagesLink"
           href='#TrainerDashCourse' onClick={() => handleMenuClick("TrainerDashCourse")}>
        <div className='SideBarButton'>
         
            Courses
         
        </div>
        </a>
        <a className="PagesLink"
           href='#'
           onClick={handleLogout} >
        <div className='SideBarButton SideBarButtonLogout'>
         <img src="Images/right-from-bracket-solid.svg" alt="" />
            Logout
         
        </div>
        </a>
      </div>
      <div className='main-content'>
        {activePage === "TrainerDashWelcome" && <TrainerDashWelcome />}
        {activePage === "TrainerDashassignment" && <TrainerDashAssignment />}
        {activePage === "TrainerDashAttendance" && <TrainerDashAttendance />}
        {activePage === "TrainerDashCourse" && <TrainerDashCoursesPage />}
      </div>
    </div>
  );
};

export default TrainerDashboardButtons;
