import "../TrainerDashCSS/TrainerDashboard.css";
import TrainerDashboardButtons from "../TrainerDashpages/TrainerDashSideBarButtons";
function TrainerDashboard() {
  return (
    <div className='SideBarContainer'>
      <div className='SideBarSubContainer'>
        <div className='navbar'>
          <img src='Images/Children.png' className='ChildrenImg' />
          
        </div>
        
        <img
          src='Images/LogoTinyTechies.png'
          className='TinyTechiesImg'
        ></img>
            <div className="SideBarTitle">
        <p className='SideBarSubContainer-p'>Welcome</p>
        <p className='SideBarSubContainer-p'>Trainer Name</p>
        </div>
       
        <div className=''>
          <TrainerDashboardButtons />
        </div>
      </div>
    </div>
  );
}

export default TrainerDashboard;
