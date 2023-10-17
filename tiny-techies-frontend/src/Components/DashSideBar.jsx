import '../css/DashSideBar.css';
import DashWelcomeTrainer from '../DashPages/TrainerDashboardWelcome'

function DashSideBar() {
  return (
    <div className='SideBarContainer'>
    <div className='SideBarSubContainer' >
    <img src="Images/TinyTechiesDashLogo.png" className='TinyTechiesImg'></img>
    <p>Welcome</p>
    <p>Trainer Name</p>
    <hr></hr>
<button className='SideBarButton'>Assignments</button>
<button className='SideBarButton'>Attendance</button>
<button className='SideBarButton'>Courses</button>   
</div>
   <div>
   <img src="Images/Children.png" className='ChildrenImg'></img>
   <DashWelcomeTrainer/>
   </div>
   
   </div>
  );
}

export default DashSideBar;
