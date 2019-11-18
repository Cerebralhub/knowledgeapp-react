import React, { Component } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';

export default class componentName extends Component {
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
              <a className="nav-link dropdown-toggle" href="categories.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-fw fa-list-alt" />
                <span>Categories</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="categories.html">Movie</a>
                <a className="dropdown-item" href="categories.html">Music</a>
                <a className="dropdown-item" href="categories.html">Television</a>
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
                    <img className="img-fluid" alt="" src="img/s2.png" /> Unboxing <span className="badge badge-warning">2</span>
                  </a>
                </li>
                <li>
                  <a href="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s3.png" /> Product / Service
                  </a>
                </li>
                <li>
                  <a href="subscriptions.html">
                    <img className="img-fluid" alt="" src="img/s4.png" /> Gaming
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div id="content-wrapper">
            <div className="container-fluid pb-0">
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
                          <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" /> &nbsp;
                            Close</a>
                        </div>
                      </div>
                      <h6>Channels</h6>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s1.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s2.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s3.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-secondary btn-sm">Subscribed <strong>1.4M</strong></button>
                        </div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle" /></span></a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s4.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s6.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s8.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s5.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s6.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s8.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s7.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-secondary btn-sm">Subscribed <strong>1.4M</strong></button>
                        </div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle" /></span></a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s1.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="channels-card">
                      <div className="channels-card-image">
                        <a href="#"><img className="img-fluid" src="img/s2.png" alt="" /></a>
                        <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                      </div>
                      <div className="channels-card-body">
                        <div className="channels-title">
                          <a href="#">Channels Name</a>
                        </div>
                        <div className="channels-view">
                          382,323 subscribers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center pagination-sm mb-4">
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
              <hr />
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
                          <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" /> &nbsp;
                            Close</a>
                        </div>
                      </div>
                      <h6>Featured Videos</h6>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                        <a href="#"><img className="img-fluid" src="img/v5.png" alt="" /></a>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <a href="#">There are many variations of passages of Lorem</a>
                        </div>
                        <div className="video-page text-success">
                          Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                        </div>
                        <div className="video-view">
                          1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                        <a href="#"><img className="img-fluid" src="img/v6.png" alt="" /></a>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <a href="#">There are many variations of passages of Lorem</a>
                        </div>
                        <div className="video-page text-danger">
                          Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger" /></a>
                        </div>
                        <div className="video-view">
                          1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                        <a href="#"><img className="img-fluid" src="img/v7.png" alt="" /></a>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <a href="#">There are many variations of passages of Lorem</a>
                        </div>
                        <div className="video-page text-success">
                          Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                        </div>
                        <div className="video-view">
                          1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card">
                      <div className="video-card-image">
                        <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                        <a href="#"><img className="img-fluid" src="img/v8.png" alt="" /></a>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title">
                          <a href="#">There are many variations of passages of Lorem</a>
                        </div>
                        <div className="video-page text-success">
                          Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                        </div>
                        <div className="video-view">
                          1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
            
    
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
