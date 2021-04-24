import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput,
} from "mdbreact";
import "./style2.css";
import { Link } from "react-router-dom";
import "./stylelogin.css";
import signInImage from "../images/sign-page-abstract-concept-illustration_335657-3875.jpg";


const Login = () => {
  return (
    <div className="main-container signIn">
      <div class="sidenav">
        <img src={signInImage} width="100%" height="100%" />
      </div>
      <div class="main">
        <div class="col-md-6 col-sm-12">
          <div class="login-form">
            <h1>Log in to Husky News</h1>
            <form>
              <div class="form-group">
                <label className="username">User Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                />
              </div>
              <div class="form-group">
                <label className="username">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-black">
                Login
              </button>
              <Link to="/sign-up">
                {" "}
                {/* <button type="submit" class="btn btn-black">
                  Register
                </button> */}
              </Link>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
