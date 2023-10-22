import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashSideBar from './Dashpages/DashSideBar';
import Attendance from './Dashpages/Attendance.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashSideBar />} />
          <Route path="/attendance" component={Attendance} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
