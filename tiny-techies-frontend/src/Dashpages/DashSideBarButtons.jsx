import React from "react";
import { useState } from "react";
import DashCourse from "../Dashpages/DashCourses.jsx";
import Attendance from "../Dashpages/Attendance.jsx";
import Welcome from "../Dashpages/DashWelcome.jsx";
import DashAssignmet from "../Dashpages/DashToggles.jsx";

// css
import "../css/DashSideBar.css";
const DashSideBarButtons = () => {
  const [activePage, setActivePage] = useState("Welcome");

  const handleMenuClick = (page) => {
    setActivePage(page);
  };
  return (
    <div className='SideBarContainer'>
      <div className=''>
        <div className='SideBarButton'>
          <a
            href='#Dashassignmet'
            onClick={() => handleMenuClick("Dashassignmet")}
          >
            Assignmet
          </a>
        </div>
        <div className='SideBarButton'>
          <a href='#Attendance' onClick={() => handleMenuClick("Attendance")}>
            Attendance
          </a>
        </div>
        <div className='SideBarButton'>
          <a href='#DashCourse' onClick={() => handleMenuClick("DashCourse")}>
            Courses
          </a>
        </div>
      </div>
      <div className='main-content'>
        {activePage === "Welcome" && <Welcome />}
        {activePage === "Dashassignmet" && <DashAssignmet />}
        {activePage === "Attendance" && <Attendance />}
        {activePage === "DashCourse" && <DashCourse />}
      </div>
    </div>
  );
};

export default DashSideBarButtons;
