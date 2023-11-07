import '../AdminDashCSS/AdminDashSideBar.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminDashStatistics from './AdminDashStatistics';
import AdminDashStudents from './AdminDashStudents';
import AdminDashTrainerToggle from './AdminDashTrainerToggle';
import AdminDashCourseToggle from './AdminDashCourseToggle';
import AdminDashRemarkableSection from "./AdminDashRemarkableSection"

const AdminDashSideBar = () => {
  const [AdminData, setAdminData] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/user/get/${localStorage.getItem('userId')}`)
      .then(response => {
        const data = response.data.data[0];
        setAdminData(data);
      })
      .catch(error => {
        console.error('Error fetching trainer data:', error);
      });
  }, []);
  const [activePage, setActivePage] = useState('AdminDashAddCourse');
  const navigate = useNavigate();
  const handleMenuClick = (page) => {
    setActivePage(page);
  }

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    navigate('/');
  };


  return (
    <div className='AdminDashSideBarContainer'>
      <div className='AdminDashSideBarSubContainer'>
        <img src="Images/LogoTinyTechies.png" className='AdminDashTinyTechiesImg' alt="Logo" />
        <div className="AdminDashSideBarTitle">
        <p className='AdminDashSideBarSubContainer-p'>Welcome</p>
        {AdminData && <p className='AdminDashSideBarSubContainer-p'>{AdminData.UserFullName}</p>}
        </div>

           <a href="#AdminDashStatistics" className="AdminDashLink" onClick={() => handleMenuClick("AdminDashStatistics")}>  <button className='AdminDashSideBarButton'>Statistics </button></a>
       
        
          <a href="#AdminDashCourseToggle" className="AdminDashLink" onClick={() => handleMenuClick("AdminDashCourseToggle")}><button className='AdminDashSideBarButton'>Courses  </button></a>
      
       
          
       
       
          <a href="#AdminDashTrainerToggle" className="AdminDashLink" onClick={() => handleMenuClick("AdminDashTrainerToggle")}>  <button className='AdminDashSideBarButton'>Trainers</button></a>
        
  
        
          <a href="#AdminDashStudents" className="AdminDashLink" onClick={() => handleMenuClick("AdminDashStudents")}><button className='AdminDashSideBarButton'>Students</button></a>
        
        
          <a href="#AdminDashStudents" className="AdminDashLink" onClick={() => handleMenuClick("AdminDashRemarkableSection")}> <button className='AdminDashSideBarButton'>Projects</button></a>

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