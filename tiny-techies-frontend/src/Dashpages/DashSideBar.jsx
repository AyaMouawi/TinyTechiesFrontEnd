import AttendanceCourse from "./AttendanceCourse";
import AttendanceTable from "./AttendanceTable";
import DashWelcomeTrainer from "./DashWelcome";
import "../css/DashSideBar.css";
import DashSideBarButtons from "./DashSideBarButtons";
function DashSideBar() {
  return (
    <div className='SideBarContainer'>
      <div className='SideBarSubContainer'>
        <img
          src='Images/TinyTechiesDashLogo.png'
          className='TinyTechiesImg'
        ></img>
        <p>Welcome</p>
        <p>Trainer Name</p>
        <hr></hr>
        <DashSideBarButtons />
      </div>
      <div>
        <img src='Images/Children.png' className='ChildrenImg' />
        {/* <DashWelcomeTrainer />
        <AttendanceCourse />
        <AttendanceTable /> */}
      </div>
    </div>
  );
}

export default DashSideBar;
