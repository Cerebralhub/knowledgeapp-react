import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import LOGO from '../img/favicon.png';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid =  ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach( val => { 
    val.length > 0 && (valid = false)
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false)
  });

  return valid;
}

 class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm_password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    

    if (formValid(this.state)) {
      alert(`
         --SUBMITTING--
         First Name: ${this.state.firstName}
         Last Name: ${this.state.lastName}
         email: ${this.state.email}
         password: ${this.state.password}
        confirm_password ${this.state.confirm_password}
      `);
      const { password, confirm_password } = this.state
      if (password !== confirm_password) {
          alert("Passwords don't match");
   }
    } else {
      alert("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }; 

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
        formErrors.firstName =
         value.length < 3  
         ? "mininum 3 characters required"
        : "";
        break;
        case "lastName":
            formErrors.lastName =
             value.length < 3  
             ?"mininum 3 characters required"
            : "";
        break;
        
        case "email":
            formErrors.email =
            emailRegex.test(value)  
            ?""
            : "invalid email address"
        break;

        case "password":
           formErrors.password =
           value.length < 6  
            ?"mininum 6 characters required"
           : "";
        break;
        
        default:
          break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  

  render() {
    const { formErrors } = this.state;
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
                <form onSubmit={this.handleSubmit} noValidate>
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" 
                     name="firstName"
                     noValidate
                     className={`form-control ${formErrors.firstName.length > 0 ? "error" : null}`}
                     onChange={this.handleChange}
                    />
                     {formErrors.firstName.length > 0 && (
                   <span className="errorMessage">{formErrors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Lat Name</label>
                    <input type="text" placeholder="Last Name" 
                    name="lastName" 
                    noValidate
                    className={`form-control ${formErrors.lastName.length > 0 ? "error" : null}`} 
                    onChange={this.handleChange}
                    />
                    {formErrors.lastName.length > 0 && (
                     <span className="errorMessage">{formErrors.lastName}</span>
                   )}
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email address"
                    name="email" 
                    noValidate
                    onChange={this.handleChange}
                    />
                     {formErrors.email.length > 0 && (
                       <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" 
                     name="password" 
                     noValidate
                     onChange={this.handleChange}
                    />
                    {formErrors.password.length > 0 && (
                     <span className="errorMessage">{formErrors.password}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" 
                     name="confirm_password" 
                     noValidate
                     onChange={this.handleChange}
                    />
                    {formErrors.confirm_password.length > 0 && (
                      <span className="errorMessage">{formErrors.confirm_password}</span>
                    )}
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
