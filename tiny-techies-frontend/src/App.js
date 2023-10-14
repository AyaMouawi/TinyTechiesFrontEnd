import React from 'react';
import HomePage from './Components/HomePage';
import MyCoursesPage from './Components/MyCoursesPage';
import CoursesPage from './Components/CoursesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MyCoursesPage" element={<MyCoursesPage />} />
          <Route path="/CoursesPage" element={<CoursesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;