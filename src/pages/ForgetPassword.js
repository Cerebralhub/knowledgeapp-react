import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../img/favicon.png';

export default class ForgetPassword extends Component {
  render() {
    return (
      <div>
            <section className="login-main-wrapper">
        <div className="container-fluid pl-0 pr-0">
          <div className="row no-gutters">
            <div className="col-md-5 p-5 bg-white full-height">
              <div className="login-main-left">
                <div className="text-center mb-5 login-main-left-header pt-4">
                <img src={LOGO} className="img-fluid" alt="LOGO" />
                  <h5 className="mt-3 mb-3">Reset Password</h5>
                  <p>It is a long established fact that a reader <br /> will be distracted by the readable.</p>
                </div>
                <form action="https://askbootstrap.com/preview/vidoe-v1-1/index.html">
                  <div className="form-group">
                    <label>Enter Email / Mobile number</label>
                    <input type="text" className="form-control" placeholder="Enter Email / Mobile number" />
                  </div>
                  <div className="mt-4">
                    <button type="submit" className="btn btn-outline-primary btn-block btn-lg">Reset Password</button>
                  </div>
                </form>
                <div className="text-center mt-5">
                  <p className="light-gray">Don’t have an account? <Link to="/register">Sign Up</Link></p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="login-main-right bg-white p-5 mt-5 mb-5">
                <div className="owl-carousel owl-carousel-login">
                  <div className="item">
                    <div className="carousel-login-card text-center">
                      <img src="img/login.png" className="img-fluid" alt="LOGO" />
                      <h5 className="mt-5 mb-3">​Watch videos offline</h5>
                      <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="carousel-login-card text-center">
                      <img src="img/login.png" className="img-fluid" alt="LOGO" />
                      <h5 className="mt-5 mb-3">Download videos effortlessly</h5>
                      <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="carousel-login-card text-center">
                      <img src="img/login.png" className="img-fluid" alt="LOGO" />
                      <h5 className="mt-5 mb-3">Create GIFs</h5>
                      <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a type specimen book. It has survived not <br />only five centuries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bootstrap core JavaScript*/}
      {/* Core plugin JavaScript*/}
      {/* Owl Carousel */}
      {/* Custom scripts for all pages*/}
      </div>
    )
  }
}
