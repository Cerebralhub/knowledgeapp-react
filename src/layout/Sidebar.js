import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaHistory, FaUsers, FaList } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <ul className="sidebar navbar-nav">
        <li className="nav-item active">
           <Link className="nav-link" to="/Landing">
             <FaHome/>
              <span>Home</span>
           </Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link" to="/channels">
           <FaUsers/>
              <span>Channels</span>
           </Link>
        </li>
       
        <li className="nav-item">
           <Link className="nav-link" to="/history">
           <FaHistory/>
              <span>History Page</span>
           </Link>
        </li>
        <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle" to="categories.html" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
               <FaList/>
              <span>Categories</span>
           </Link>
           <div className="dropdown-menu">
              <Link className="dropdown-item" to="categories.html">Movie</Link>
              <Link className="dropdown-item" to="categories.html">Music</Link>
              <Link className="dropdown-item" to="categories.html">Television</Link>
           </div>
        </li>
        <li className="nav-item channel-sidebar-list">
           <h6>SUBSCRIPTIONS</h6>
           <ul>
              <li>
                 <Link to="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s1.png"/> Your Life
                 </Link>
              </li>
              <li>
                 <Link to="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s2.png"/> Unboxing <span className="badge badge-warning">2</span>
                 </Link>
              </li>
              <li>
                 <Link to="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s3.png"/> Product / Service
                 </Link>
              </li>
              <li>
                 <Link to="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s4.png"/> Gaming
                 </Link>
              </li>
           </ul>
        </li>
    </ul>

)

}

export default Sidebar