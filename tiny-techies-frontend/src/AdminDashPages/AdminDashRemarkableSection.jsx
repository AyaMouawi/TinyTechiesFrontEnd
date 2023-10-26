import React, { useState } from "react";
import AdminDashAddRemarkableProjects from "./AdminDashAddRemarkableProjects" 
// css
import '../css/remarkableSection.css';
import "../AdminDashCSS/AdminDash.css";
const AdminDashRemarkableSection = () => {

  return (
    <div className='AdminprojectWrap'>
    <AdminDashAddRemarkableProjects />
    <AdminDashAddRemarkableProjects />
    <AdminDashAddRemarkableProjects />
    <AdminDashAddRemarkableProjects />
    <AdminDashAddRemarkableProjects />
    <AdminDashAddRemarkableProjects />
    <form>
        
    <input type="checkbox" name="" id="" />
    <label htmlFor="">Show All Projects</label>

    </form>
    </div>
  );
};

export default AdminDashRemarkableSection;
