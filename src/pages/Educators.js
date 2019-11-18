import React, { Component } from 'react'
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom'

 class Educators extends Component {
  render() {
    return (
      <div>
       <Navbar />
      
        <div id="content-wrapper">
          <div className="container-fluid pb-0">
            <div className="top-mobile-search">
              <div className="row">
                <div className="col-md-12">
                  <form className="mobile-search">
                    <div className="input-group">
                      <input type="text" placeholder="Search for..." className="form-control" />
                      <div className="input-group-append">
                        <button type="button" className="btn btn-dark"><i className="fas fa-search" /></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <hr />
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <div className="btn-group float-right right-action">
                      <Link to="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-star" />
                          &nbsp;Category</Link>
                        <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-signal" /> &nbsp;
                          Topic</Link>
                        <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-times-circle" /> &nbsp;
                          Close</Link>
                      </div>
                    </div>
                    <h6>Featured Videos</h6>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="video-card">
                    <div className="video-card-image">
                      <a className="play-icon" href="upload-video.html"><i className="fas fa-play-circle" /></a>
                      <Link to="#"><img className="img-fluid" src="img/v1.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-success">
                        Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></Link>
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
                      <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                      <Link to="#"><img className="img-fluid" src="img/v2.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-success">
                        Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></Link>
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
                      <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                      <Link to="#"><img className="img-fluid" src="img/v3.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-danger">
                        Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Unverified"><i className="fas fa-frown text-danger" /></Link>
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
                      <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                      <Link to="#"><img className="img-fluid" src="img/v4.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-success">
                        Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></Link>
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
                      <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                      <Link to="#"><img className="img-fluid" src="img/v5.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-success">
                        Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></Link>
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
                      <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                      <Link to="#"><img className="img-fluid" src="img/v6.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-danger">
                        Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Unverified"><i className="fas fa-frown text-danger" /></Link>
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
                      <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                      <Link to="#"><img className="img-fluid" src="img/v7.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-success">
                        Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></Link>
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
                      <Link className="play-icon" to="#"><i className="fas fa-play-circle" /></Link>
                      <Link to="#"><img className="img-fluid" src="img/v8.png" alt="" /></Link>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <Link to="#">There are many variations of passages of Lorem</Link>
                      </div>
                      <div className="video-page text-success">
                        Education <Link title data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></Link>
                      </div>
                      <div className="video-view">
                        1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <section className="pagination col-sm-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                </ul>
              </nav>
            </section>
            {/* /.container-fluid */}
            {/* Sticky Footer */}
            <footer className="sticky-footer">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-lg-6 col-sm-6">
                    <p>
                      Copyright ©
                      All Rights Reserved | Knowledge App
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 text-right">
                    <div className="app">
                      <Link to="#"><img alt="" src="img/google.png" /></Link>
                      <Link to="#"><img alt="" src="img/apple.png" /></Link>
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
        <Link className="scroll-to-top rounded" to="#page-top">
          <i className="fas fa-angle-up" />
        </Link>
        {/* Bootstrap core JavaScript*/}
        {/* Core plugin JavaScript*/}
        {/* Owl Carousel */}
        {/* Custom scripts for all pages*/}
      </div>
      
    )
  }
}

export default Educators;
