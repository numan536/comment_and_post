import React from 'react';
import './styles.css';
//import './csss/style.css'
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import signUpImage from '../images/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg';
import signinGoogle from "../images/icons8-google-plus-50.png";
//import './stylelogin.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const params = useParams();
  const handleSubmit = async () => {};

  return (
    <div>
      <div class="sidenav">
        <div class="sidenav">
          <img src={signUpImage} width="100%" height="100%" />
        </div>
      </div>
      <div class="main">
        <div class="col-md-6 col-sm-12">
          <div class="login-form">
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
                <label className="username">Email</label>
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group">
                <label className="username">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              {/* <Link to="/login">
                {' '}
                <button type="submit" class="btn btn-black">
                  Login
                </button>
              </Link> */}
              <button type="submit" class="btn btn-secondary">
                Register
              </button>
              <img src={signinGoogle} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
