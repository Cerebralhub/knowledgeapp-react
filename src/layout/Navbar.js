import React from 'react';
import {FaBars,FaSearch,FaPlusCircle,FaUserCircle,FaSignoutAlt,FaCog,FaVideo} from 'react-icons/fa';
const Navbar = () => {
return (
   <>
      <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
      &nbsp;&nbsp;
      <button className="btn btn-link btn-sm text-secondary order-1 order-sm-0" id="sidebarToggle">
      <FaBars/>
      </button> &nbsp;&nbsp;
      <a className="navbar-brand mr-1" href="index.html"><img className="img-fluid" alt="" src=""/>Knowledge App</a>

      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
         <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..."/>
            <div className="input-group-append">
               <button className="btn btn-light" type="button">
               <FaSearch/>
               </button>
            </div>
         </div>
      </form>
      <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
         <li className="nav-item mx-1">
            <a className="nav-link" href="upload.html">
            <FaPlusCircle/>
               Upload Video
            </a>
         </li>
         <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
            <a className="nav-link dropdown-toggle user-dropdown-link" href="#" id="userDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <img alt="Avatar" src="img/user.png"/>
               Osahan
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
               <a className="dropdown-item" href="account.html">
               <FaUserCircle/>
                   &nbsp; My
                  Account</a>
               <a className="dropdown-item" href="subscriptions.html"><FaVideo/> &nbsp;
                  Subscriptions</a>
               <a className="dropdown-item" href="settings.html"><FaCog/> &nbsp; Settings</a>
               <div className="dropdown-divider"></div>
               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"><FaSign-out-alt/> &nbsp; Logout</a>
            </div>
         </li>
      </ul>
   </nav>
   </>



)

}

export default Navbar