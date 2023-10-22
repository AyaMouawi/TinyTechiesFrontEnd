import "../css/DashSideBar.css";
import DashSideBarButtons from "./DashSideBarButtons";
function DashSideBar() {
  return (
    <div className='SideBarContainer'>
      <div className='SideBarSubContainer'>
        <div className='navbar'>
          <img src='Images/Children.jpeg' className='ChildrenImg' />
        </div>
        <img
          src='Images/TinyTechiesDashLogo.png'
          className='TinyTechiesImg'
        ></img>

        <p className='SideBarSubContainer-p'>Welcome</p>
        <p className='SideBarSubContainer-p'>Trainer Name</p>
        <hr />
        <div className=''>
          <DashSideBarButtons />
        </div>
      </div>
    </div>
  );
}

export default DashSideBar;
