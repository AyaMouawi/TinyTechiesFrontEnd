import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../TrainerDashCSS/TrainerDashboard.css";
import TrainerDashboardButtons from "../TrainerDashpages/TrainerDashSideBarButtons";

function TrainerDashboard() {
  const [trainerData, setTrainerData] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/trainers/getTrainerByID/${localStorage.getItem('userId')}`)
      .then(response => {
        const data = response.data.data[0];
        setTrainerData(data);
      })
      .catch(error => {
        console.error('Error fetching trainer data:', error);
      });
  }, []);

  return (
    <div className='SideBarContainer'>
      <div className='SideBarSubContainer'>
        <div className='navbar'>
          <img src='Images/Children.png' className='ChildrenImg' />
        </div>
        <img src='Images/LogoTinyTechies.png' className='TinyTechiesImg' />
        <div className="SideBarTitle">
          <p className='SideBarSubContainer-p'>Welcome</p>
          {trainerData && <p className='SideBarSubContainer-p'>{trainerData.UserFullName}</p>}
        </div>
        <div className=''>
          <TrainerDashboardButtons />
        </div>
      </div>
    </div>
  );
}

export default TrainerDashboard;
