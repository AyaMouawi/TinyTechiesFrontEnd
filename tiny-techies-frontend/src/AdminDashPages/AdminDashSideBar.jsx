import '../AdminDashCSS/AdminDashSideBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashStatistics from './AdminDashStatistics';
import AdminDashStudents from './AdminDashStudents';
import AdminDashTrainerToggle from './AdminDashTrainerToggle';
import AdminDashCourseToggle from './AdminDashCourseToggle';
import AdminDashAddRemarkableProjects from "./AdminDashAddRemarkableProjects";
import AdminDashRemarkableSection from "./AdminDashRemarkableSection"

const AdminDashSideBar = () => {
  const [activePage, setActivePage] = useState('AdminDashAddCourse');
  const navigate = useNavigate();
  const handleMenuClick = (page) => {
    setActivePage(page);
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };


  return (
    <div className='AdminDashSideBarContainer'>
      <div className='AdminDashSideBarSubContainer'>
        <img src="Images/LogoTinyTechies.png" className='AdminDashTinyTechiesImg' alt="Logo" />
        <div className="AdminDashSideBarTitle">
        <p className='AdminDashSideBarSubContainer-p'>Welcome</p>
        <p className='AdminDashSideBarSubContainer-p'>Trainer Name</p>
        </div>
       
        <button className='AdminDashSideBarButton'>
          <a href="#AdminDashCourseToggle" onClick={() => handleMenuClick("AdminDashCourseToggle")}>Courses</a>
        </button>
        <button className='AdminDashSideBarButton'>
          <a href="#AdminDashStatistics" onClick={() => handleMenuClick("AdminDashStatistics")}>Statistics</a>
        </button>
        <button className='AdminDashSideBarButton'>
          <a href="#AdminDashTrainerToggle" onClick={() => handleMenuClick("AdminDashTrainerToggle")}>Trainers</a>
        </button>
  
        <button className='AdminDashSideBarButton'>
          <a href="#AdminDashStudents" onClick={() => handleMenuClick("AdminDashStudents")}>Students</a>
        </button>
        <button className='AdminDashSideBarButton'>
          <a href="#AdminDashStudents" onClick={() => handleMenuClick("AdminDashRemarkableSection")}>Projects</a>
        </button>
        <a className="PagesLink"
           href='#'
           onClick={handleLogout} >
        <div className='SideBarButton SideBarButtonLogout'>
         <img src="Images/right-from-bracket-solid.svg" alt="" />
            Logout
         
        </div>
        </a>
      </div>
      <div>
        <img src="Images/Children.png" className='AdminDashChildrenImg' alt="Children" />
        {activePage === "AdminDashCourseToggle" && <AdminDashCourseToggle />}
        {activePage === "AdminDashStatistics" && <AdminDashStatistics />}
        {activePage === "AdminDashTrainerToggle" && <AdminDashTrainerToggle />}
        {activePage === "AdminDashStudents" && <AdminDashStudents />}
        {activePage === "AdminDashRemarkableSection" && <AdminDashRemarkableSection />}
      
      </div>
    </div>
  );
}

export default AdminDashSideBar;