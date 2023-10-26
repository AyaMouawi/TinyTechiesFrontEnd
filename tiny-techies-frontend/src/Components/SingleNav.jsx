import React, { useState } from 'react';
import "../css/Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const SingleNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="NavBar-wrapper">
 
        <div className="NavBar-header-parent">
          <div className="NavBar-header-inner">
            <div className="NavBar-brand-logo">
              <a href="/">
                <img className='Navbar-Logo' src="../Images/BookTinyTechiesLogo.png" alt="" />

              </a>
             
         
            </div>
            
            <div className={`ks-navbar-menu ${menuOpen ? 'menu-open' : ''}`}>
              <ul className="NavbarMenu ks-ul">
                <li className="responsive-logo">
                  <a href="">
                    <img src="/Images/" alt="" />
                  </a>
                </li>
                <li >
                  <Link to="/CoursesPage">All Courses</Link>
                 
                </li>
                <li>
                  <a href="#SingleAssignment">Assignments</a>
                </li>
                <li>
                  <a href="#SingleProjects">Projects</a>
                </li>
                <li>
                <a href="/login">
              
              <img className='LoginLogo inside' src="../Images/users-solid.svg" alt="" />
                
              </a>
                </li>
              </ul>

            </div>
            <div className="ks-toggle-btn" onClick={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</div>
            <div className="NavBar-brand-logo outside">
              <a href="/login">
              
              <img className='LoginLogo' src="../Images/users-solid.svg" alt="" />
                
              </a>
         
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default SingleNav;