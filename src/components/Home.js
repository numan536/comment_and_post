import React from 'react';
import './styles.css';
import Posts from './Posts';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <nav class="navbar home__nav col-md-12">
            <div class="container">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand home__link" href="/">
                  Hacky News
                </a>
              </div>
              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul class="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/create-post">New Post</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/sign-up">SIGN UP</Link>
                  </li>
                  <li>
                    <Link to="/logout">LOG OUT</Link>
                  </li>
                  <li class="home__li"></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <Posts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
