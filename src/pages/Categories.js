import React, { Component } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';
import { CatImg1 } from '../img/s1.png';
import { CatImg2 } from '../img/s2.png';
import { CatImg3 } from '../img/s3.png';
import { CatImg4 } from '../img/s4.png';
import { CatImg5 } from '../img/s5.png';
import { CatImg6 } from '../img/s6.png';
import { CatImg7 } from '../img/s7.png';
import { CatImg8 } from '../img/s8.png';

 class Categories extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <div id="wrapper">
          {/* Sidebar */}
          <ul className="sidebar navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-home" />
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="channels.html">
                <i className="fas fa-fw fa-users" />
                <span>Channels</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="single-channel.html">
                <i className="fas fa-fw fa-user-alt" />
                <span>Single Channel</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="video-page.html">
                <i className="fas fa-fw fa-video" />
                <span>Video Page</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="upload-video.html">
                <i className="fas fa-fw fa-cloud-upload-alt" />
                <span>Upload Video</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-fw fa-folder" />
                <span>Pages</span>
              </a>
              <div className="dropdown-menu">
                <h6 className="dropdown-header">Login Screens:</h6>
                <a className="dropdown-item" href="login.html">Login</a>
                <a className="dropdown-item" href="register.html">Register</a>
                <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
                <div className="dropdown-divider" />
                <h6 className="dropdown-header">Other Pages:</h6>
                <a className="dropdown-item" href="404.html">404 Page</a>
                <a className="dropdown-item" href="blank.html">Blank Page</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="history-page.html">
                <i className="fas fa-fw fa-history" />
                <span>History Page</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/catergories" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-fw fa-list-alt" />
                <span>Categories</span>
              </Link>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/catergories">Movie</a>
                <a className="dropdown-item" href="/catergories">Music</a>
                <a className="dropdown-item" href="/catergories">Television</a>
              </div>
            </li>
            <li className="nav-item channel-sidebar-list">
              <h6>SUBSCRIPTIONS</h6>
              <ul>
                <li>
                  <a href="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s1.png" /> Your Life 
                  </a>
                </li>
                <li>
                  <a href="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s2.png" /> Unboxing  <span className="badge badge-warning">2</span>
                  </a>
                </li>
                <li>
                  <a href="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s3.png" /> Product / Service  
                  </a>
                </li>
                <li>
                  <a href="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s4.png" />  Gaming 
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div id="content-wrapper">
            <div className="container-fluid">
              <div className="video-block section-padding">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title">
                      <div className="btn-group float-right right-action">
                        <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star" /> &nbsp; Top Rated</a>
                          <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal" /> &nbsp; Viewed</a>
                          <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" /> &nbsp; Close</a>
                        </div>
                      </div>
                      <h6>Categories</h6>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src={{CatImg1}} alt="CatImg1" />
                        <h6>Your Life <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s2.png" alt="" />
                        <h6>Unboxing Cool <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s3.png" alt="" />
                        <h6>Service Reviewing</h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s4.png" alt="" />
                        <h6>Gaming <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s5.png" alt="" />
                        <h6>Technology Tutorials</h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s6.png" alt="" />
                        <h6>Singing</h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s7.png" alt="" />
                        <h6>Cooking</h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s8.png" alt="" />
                        <h6>Traveling</h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s1.png" alt="" />
                        <h6>Education</h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s2.png" alt="" />
                        <h6>Noodles, Sauces &amp; Instant Food</h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s3.png" alt="" />
                        <h6>Comedy <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="category-item mt-0 mb-0">
                      <a href="shop.html">
                        <img className="img-fluid" src="img/s4.png" alt="" />
                        <h6>Lifestyle Advice</h6>
                        <p>74,853 views</p>
                      </a>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center pagination-sm mb-0">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* /.container-fluid */}
            {/* Sticky Footer */}
            <footer className="sticky-footer">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-sm-6">
                 
                  </div>
                  <div className="col-lg-6 col-sm-6 text-right">
                    <div className="app">
                      <a href="#"><img alt="" src="img/google.png" /></a>
                      <a href="#"><img alt="" src="img/apple.png" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* /.content-wrapper */}
        </div>
        {/* /#wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap core JavaScript*/}
        {/* Core plugin JavaScript*/}
        {/* Owl Carousel */}
        {/* Custom scripts for all pages*/}
      </div>
      
    )
  }
}

export default Categories;
