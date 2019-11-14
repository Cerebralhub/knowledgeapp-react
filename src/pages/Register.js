import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LOGO from '../img/favicon.png'

 class Register extends Component {
  render() {
    return (
      <div className="login-main-body">
        <section className="login-main-wrapper">
        <div className="container-fluid pl-0 pr-0">
          <div className="row no-gutters">
            <div className="col-md-5 p-5 bg-white full-height">
              <div className="login-main-left">
                <div className="text-center mb-5 login-main-left-header pt-4">
                <img src={LOGO} className="img-fluid" alt="LOGO" />
                  <h5 className="mt-3 mb-3">Welcome to the Knowledge App</h5>
                  <p>Fill this form to Sign-up <br />and start watching</p>
                </div>
                <form action="#">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <label>Lat Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email address" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                  </div>
                  <div className="mt-4">
                    <button type="submit" className="btn btn-outline-primary btn-block btn-lg">Sign Up</button>
                  </div>
                  <div className="col-sm-12 mt-5">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="inlineCheckbox1">Sign up as student</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">Sign up as educator</label>
                    </div>
                  </div>
                </form>
                <div className="text-center mt-5">
                  <p className="light-gray">Already have an Account? <Link to="/Login">Sign In</Link></p>
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
                      <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a
                        type specimen book. It has survived not <br />only five centuries</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="carousel-login-card text-center">
                      <img src="img/login.png" className="img-fluid" alt="LOGO" />
                      <h5 className="mt-5 mb-3">Download videos effortlessly</h5>
                      <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a
                        type specimen book. It has survived not <br />only five centuries</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="carousel-login-card text-center">
                      <img src="img/login.png" className="img-fluid" alt="LOGO" />
                      <h5 className="mt-5 mb-3">Create GIFs</h5>
                      <p className="mb-4">when an unknown printer took a galley of type and scrambled<br /> it to make a
                        type specimen book. It has survived not <br />only five centuries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
export default Register;
