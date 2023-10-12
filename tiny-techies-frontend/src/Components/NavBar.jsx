import React from 'react';
import "../css/Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <div className="NavBar-wrapper">
 
        <div className="NavBar-header-parent">
          <div className="NavBar-header-inner">
            <div className="NavBar-brand-logo">
              <a href="index.html">
                <img className='Navbar-Logo' src="Images/BookTinyTechiesLogo.png" alt="" />
              </a>
         
            </div>
            <div className="ks-navbar-menu">
              <ul className="NavbarMenu ks-ul">
                <li className="responsive-logo">
                  <a href="javascript:;">
                    <img src="/Images/" alt="" />
                  </a>
                </li>
                <li >
                  <a href="#">All Courses</a>
                </li>
                <li>
                  <a href="#">Know More</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
          
              </ul>

            </div>
            <div className="NavBar-brand-logo">
              <a href="#">
                <img className='LoginLogo' src="Images/users-solid.svg" alt="" />
              </a>
         
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default NavBar;