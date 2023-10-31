import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import SingleCoursePage from './Components/SingleCoursePage';
import CoursesPage from './Components/CoursesPage';
import MyCoursesPage from './Components/MyCoursesPage';
import TrainerDashboard from './Components/TrainerDashboard';
import AdminDashboard from './Components/AdminDashboard';
import PageNotFound from './Components/PageNotFound';
import PrivateRoute from './PrivateRoute';
import NoAccess from './Components/NoAccess';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/SingleCoursePage/:CourseId" element={<SingleCoursePage/>} />
      <Route path="/CoursesPage" element={<CoursesPage/>} />
      <Route path='/NotAuth' element={<NoAccess/>}/>
      <Route path='*' element={<PageNotFound/>}/>

      <Route 
        path="/MyCoursesPage" 
        element={<PrivateRoute element={<MyCoursesPage/>} allowedRoles={'Student'} fallbackPath="/NotAuth" />}
         />

      <Route
        path="/TrainerDashboard"
        element={<PrivateRoute element={<TrainerDashboard/>} allowedRoles={'Trainer'} fallbackPath="/NotAuth" />}
  
      />
      <Route
        path="/AdminDashboard"
        element={<PrivateRoute element={<AdminDashboard/>} allowedRoles={'Admin'} fallbackPath="/NotAuth" />}
      />
    </Routes>
  );
}

export default App;
