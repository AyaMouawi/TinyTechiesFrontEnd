import '../css/SideBar.css';
import TrainerDashboardWelcome from './TrainerDashboardWelcome'

function SideBar() {
  return (
    <div className='SideBarContainer'>
    <div className='SideBarSubContainer' >
    <img src="../../Images/TinyTechiesDashLogo.png" className='TinyTechiesImg'></img>
    <p>Welcome</p>
    <p>Trainer Name</p>
    <hr></hr>
<button className='SideBarButton'>Assignments</button>
<button className='SideBarButton'>Attendance</button>
<button className='SideBarButton'>Courses</button>   
</div>
   <div>
   <img src="../../Images/Children.png" className='ChildrenImg'></img>
   <TrainerDashboardWelcome/>
   </div>
   
   </div>
  );
}

export default SideBar;
