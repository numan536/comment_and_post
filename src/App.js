import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import CreatePost from './components/CreatePost';
import Signup from './components/Signup';
import Posts from './components/Posts';
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
	render(){
	return (
	<div>
	<Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
</div>
)
}
}

export default App;
