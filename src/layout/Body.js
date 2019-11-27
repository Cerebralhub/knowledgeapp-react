import React from 'react';
import {FaStar,FaSignal,FaTimesCircle,FaSearch} from 'react-icons/fa';
import '../css/custom.css'

const Body = () => {
    return (
        <div id="content-wrapper">
        <div ClassName="container-fluid pb-0">
           <div ClassName="top-mobile-search">
              <div ClassName="row">
                 <div ClassName="col-md-12">
                    <form ClassName="mobile-search">
                       <div ClassName="input-group">
                          <input type="text" placeholder="Search for..." ClassName="form-control"/>
                          <div ClassName="input-group-append">
                             <button type="button" ClassName="btn btn-dark"> <FaSearch/></button>
                          </div>
                       </div>
                    </form>
                 </div>
              </div>
           </div>
           <div ClassName="top-category section-padding mb-4">
              <div ClassName="row">
                 <div ClassName="col-md-12">
                    <div ClassName="main-title">
                       <div ClassName="btn-group float-right right-action">
                          <a href="#" ClassName="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true"
                             aria-expanded="false">
                             <i ClassName="fa fa-ellipsis-h" aria-hidden="true"></i>
                          </a>
                          <div ClassName="dropdown-menu dropdown-menu-right">
                             <a ClassName="dropdown-item" href="#"> <FaStar/> &nbsp; Top Rated</a>
                             <a ClassName="dropdown-item" href="#"> <FaSignal/> &nbsp; Viewed</a>
                             <a ClassName="dropdown-item" href="#"> <FaTimesCircle/> &nbsp;
                                Close</a>
                          </div>
                       </div>
                       <h6>Channels Categories</h6>
                    </div>
                 </div>
                 <div ClassName="col-md-12">
                    <div ClassName="owl-carousel owl-carousel-category">
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s1.png" alt=""/>
                                <h6>Your Life</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s2.png" alt=""/>
                                <h6>Unboxing Cool</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s3.png" alt=""/>
                                <h6>Service Reviewing</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s4.png" alt=""/>
                                <h6>Gaming <span title="" data-placement="top" data-toggle="tooltip"
                                      data-original-title="Verified"><i
                                         ClassName="fas fa-check-circle text-success"></i></span></h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s5.png" alt=""/>
                                <h6>Technology Tutorials</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s6.png" alt=""/>
                                <h6>Singing</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s7.png" alt=""/>
                                <h6>Cooking</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s8.png" alt=""/>
                                <h6>Traveling</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s1.png" alt=""/>
                                <h6>Education</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s2.png" alt=""/>
                                <h6>Noodles, Sauces & Instant Food</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s3.png" alt=""/>
                                <h6>Comedy <span title="" data-placement="top" data-toggle="tooltip"
                                      data-original-title="Verified"><i
                                         ClassName="fas fa-check-circle text-success"></i></span></h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                       <div ClassName="item">
                          <div ClassName="category-item">
                             <a href="#">
                                <img ClassName="img-fluid" src="img/s4.png" alt=""/>
                                <h6>Lifestyle Advice</h6>
                                <p>74,853 views</p>
                             </a>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <hr/>
           <div ClassName="video-block section-padding">
              <div ClassName="row">
                 <div ClassName="col-md-12">
                    <div ClassName="main-title">
                       <div ClassName="btn-group float-right right-action">
                          <a href="#" ClassName="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true"
                             aria-expanded="false">
                             Sort by <i ClassName="fa fa-caret-down" aria-hidden="true"></i>
                          </a>
                          <div ClassName="dropdown-menu dropdown-menu-right">
                             <a ClassName="dropdown-item" href="#"><i ClassName="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                             <a ClassName="dropdown-item" href="#"><i ClassName="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                             <a ClassName="dropdown-item" href="#"><i ClassName="fas fa-fw fa-times-circle"></i> &nbsp;
                                Close</a>
                          </div>
                       </div>
                       <h6>Featured Videos</h6>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="video-card">
                       <div ClassName="video-card-image">
                          <a ClassName="play-icon" href="video-page.html"><i ClassName="fas fa-play-circle"></i></a>
                          <a href="#"><img ClassName="img-fluid" src="img/v1.png" alt=""/></a>
                          <div ClassName="time">3:50</div>
                       </div>
                       <div ClassName="video-card-body">
                          <div ClassName="video-title">
                             <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div ClassName="video-page text-success">
                             Education <a title="" data-placement="top" data-toggle="tooltip" href="#"
                                data-original-title="Verified"><i ClassName="fas fa-check-circle text-success"></i></a>
                          </div>
                          <div ClassName="video-view">
                             1.8M views &nbsp;<i ClassName="fas fa-calendar-alt"></i> 11 Months ago
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="video-card">
                       <div ClassName="video-card-image">
                          <a ClassName="play-icon" href="#"><i ClassName="fas fa-play-circle"></i></a>
                          <a href="#"><img ClassName="img-fluid" src="img/v2.png" alt=""/></a>
                          <div ClassName="time">3:50</div>
                       </div>
                       <div ClassName="video-card-body">
                          <div ClassName="video-title">
                             <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div ClassName="video-page text-success">
                             Education <a title="" data-placement="top" data-toggle="tooltip" href="#"
                                data-original-title="Verified"><i ClassName="fas fa-check-circle text-success"></i></a>
                          </div>
                          <div ClassName="video-view">
                             1.8M views &nbsp;<i ClassName="fas fa-calendar-alt"></i> 11 Months ago
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="video-card">
                       <div ClassName="video-card-image">
                          <a ClassName="play-icon" href="#"><i ClassName="fas fa-play-circle"></i></a>
                          <a href="#"><img ClassName="img-fluid" src="img/v3.png" alt=""/></a>
                          <div ClassName="time">3:50</div>
                       </div>
                       <div ClassName="video-card-body">
                          <div ClassName="video-title">
                             <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div ClassName="video-page text-danger">
                             Education <a title="" data-placement="top" data-toggle="tooltip" href="#"
                                data-original-title="Unverified"><i ClassName="fas fa-frown text-danger"></i></a>
                          </div>
                          <div ClassName="video-view">
                             1.8M views &nbsp;<i ClassName="fas fa-calendar-alt"></i> 11 Months ago
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="video-card">
                       <div ClassName="video-card-image">
                          <a ClassName="play-icon" href="#"><i ClassName="fas fa-play-circle"></i></a>
                          <a href="#"><img ClassName="img-fluid" src="img/v4.png" alt=""/></a>
                          <div ClassName="time">3:50</div>
                       </div>
                       <div ClassName="video-card-body">
                          <div ClassName="video-title">
                             <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div ClassName="video-page text-success">
                             Education <a title="" data-placement="top" data-toggle="tooltip" href="#"
                                data-original-title="Verified"><i ClassName="fas fa-check-circle text-success"></i></a>
                          </div>
                          <div ClassName="video-view">
                             1.8M views &nbsp;<i ClassName="fas fa-calendar-alt"></i> 11 Months ago
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="video-card">
                       <div ClassName="video-card-image">
                          <a ClassName="play-icon" href="#"><i ClassName="fas fa-play-circle"></i></a>
                          <a href="#"><img ClassName="img-fluid" src="img/v5.png" alt=""/></a>
                          <div ClassName="time">3:50</div>
                       </div>
                       <div ClassName="video-card-body">
                          <div ClassName="video-title">
                             <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div ClassName="video-page text-success">
                             Education <a title="" data-placement="top" data-toggle="tooltip" href="#"
                                data-original-title="Verified"><i ClassName="fas fa-check-circle text-success"></i></a>
                          </div>
                          <div ClassName="video-view">
                             1.8M views &nbsp;<i ClassName="fas fa-calendar-alt"></i> 11 Months ago
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="video-card">
                       <div ClassName="video-card-image">
                          <a ClassName="play-icon" href="#"><i ClassName="fas fa-play-circle"></i></a>
                          <a href="#"><img ClassName="img-fluid" src="img/v6.png" alt=""/></a>
                          <div ClassName="time">3:50</div>
                       </div>
                       <div ClassName="video-card-body">
                          <div ClassName="video-title">
                             <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div ClassName="video-page text-danger">
                             Education <a title="" data-placement="top" data-toggle="tooltip" href="#"
                                data-original-title="Unverified"><i ClassName="fas fa-frown text-danger"></i></a>
                          </div>
                          <div ClassName="video-view">
                             1.8M views &nbsp;<i ClassName="fas fa-calendar-alt"></i> 11 Months ago
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="video-card">
                       <div ClassName="video-card-image">
                          <a ClassName="play-icon" href="#"><i ClassName="fas fa-play-circle"></i></a>
                          <a href="#"><img ClassName="img-fluid" src="img/v7.png" alt=""/></a>
                          <div ClassName="time">3:50</div>
                       </div>
                       <div ClassName="video-card-body">
                          <div ClassName="video-title">
                             <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div ClassName="video-page text-success">
                             Education <a title="" data-placement="top" data-toggle="tooltip" href="#"
                                data-original-title="Verified"><i ClassName="fas fa-check-circle text-success"></i></a>
                          </div>
                          <div ClassName="video-view">
                             1.8M views &nbsp;<i ClassName="fas fa-calendar-alt"></i> 11 Months ago
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="video-card">
                       <div ClassName="video-card-image">
                          <a ClassName="play-icon" href="#"><i ClassName="fas fa-play-circle"></i></a>
                          <a href="#"><img ClassName="img-fluid" src="img/v8.png" alt=""/></a>
                          <div ClassName="time">3:50</div>
                       </div>
                       <div ClassName="video-card-body">
                          <div ClassName="video-title">
                             <a href="#">There are many variations of passages of Lorem</a>
                          </div>
                          <div ClassName="video-page text-success">
                             Education <a title="" data-placement="top" data-toggle="tooltip" href="#"
                                data-original-title="Verified"><i ClassName="fas fa-check-circle text-success"></i></a>
                          </div>
                          <div ClassName="video-view">
                             1.8M views &nbsp;<i ClassName="fas fa-calendar-alt"></i> 11 Months ago
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <section ClassName="pagination col-sm-12">
                 <nav aria-label="Page navigation example">
                     <ul ClassName="pagination">
                         <li ClassName="page-item"><a ClassName="page-link" href="#">Previous</a></li>
                         <li ClassName="page-item"><a ClassName="page-link" href="#">1</a></li>
                         <li ClassName="page-item"><a ClassName="page-link" href="#">2</a></li>
                         <li ClassName="page-item"><a ClassName="page-link" href="#">3</a></li>
                         <li ClassName="page-item"><a ClassName="page-link" href="#">Next</a></li>
                     </ul>
                 </nav>
             </section>

           <hr ClassName="mt-0"/>
           <div ClassName="video-block section-padding">
              <div ClassName="row">
                 <div ClassName="col-md-12">
                    <div ClassName="main-title">
                       <div ClassName="btn-group float-right right-action">
                          <a href="#" ClassName="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true"
                             aria-expanded="false">
                             Sort by <i ClassName="fa fa-caret-down" aria-hidden="true"></i>
                          </a>
                          <div ClassName="dropdown-menu dropdown-menu-right">
                             <a ClassName="dropdown-item" href="#"><i ClassName="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                             <a ClassName="dropdown-item" href="#"><i ClassName="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                             <a ClassName="dropdown-item" href="#"><i ClassName="fas fa-fw fa-times-circle"></i> &nbsp;
                                Close</a>
                          </div>
                       </div>
                       <h6>Popular Channels</h6>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="channels-card">
                       <div ClassName="channels-card-image">
                          <a href="#"><img ClassName="img-fluid" src="img/s1.png" alt=""/></a>
                          <div ClassName="channels-card-image-btn"><button type="button"
                                ClassName="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                       </div>
                       <div ClassName="channels-card-body">
                          <div ClassName="channels-title">
                             <a href="#">Channels Name</a>
                          </div>
                          <div ClassName="channels-view">
                             382,323 subscribers
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="channels-card">
                       <div ClassName="channels-card-image">
                          <a href="#"><img ClassName="img-fluid" src="img/s2.png" alt=""/></a>
                          <div ClassName="channels-card-image-btn"><button type="button"
                                ClassName="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                       </div>
                       <div ClassName="channels-card-body">
                          <div ClassName="channels-title">
                             <a href="#">Channels Name</a>
                          </div>
                          <div ClassName="channels-view">
                             382,323 subscribers
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="channels-card">
                       <div ClassName="channels-card-image">
                          <a href="#"><img ClassName="img-fluid" src="img/s3.png" alt=""/></a>
                          <div ClassName="channels-card-image-btn"><button type="button"
                                ClassName="btn btn-outline-secondary btn-sm">Subscribed <strong>1.4M</strong></button>
                          </div>
                       </div>
                       <div ClassName="channels-card-body">
                          <div ClassName="channels-title">
                             <a href="#">Channels Name <span title="" data-placement="top" data-toggle="tooltip"
                                   data-original-title="Verified"><i ClassName="fas fa-check-circle"></i></span></a>
                          </div>
                          <div ClassName="channels-view">
                             382,323 subscribers
                          </div>
                       </div>
                    </div>
                 </div>
                 <div ClassName="col-xl-3 col-sm-6 mb-3">
                    <div ClassName="channels-card">
                       <div ClassName="channels-card-image">
                          <a href="#"><img ClassName="img-fluid" src="img/s4.png" alt=""/></a>
                          <div ClassName="channels-card-image-btn"><button type="button"
                                ClassName="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                       </div>
                       <div ClassName="channels-card-body">
                          <div ClassName="channels-title">
                             <a href="#">Channels Name</a>
                          </div>
                          <div ClassName="channels-view">
                             382,323 subscribers
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
   </div>
   </div>
)

}

export default Body