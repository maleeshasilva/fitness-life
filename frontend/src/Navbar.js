import React, { Component } from "react";
import logo from './components/image/logo.png';
/*react font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Switch, Route, Link } from "react-router-dom";

import AuthService from "./services/auth.service";

class Navbar extends Component {

    constructor(props) {
      super(props);
      this.logOut = this.logOut.bind(this);
  
      this.state = {
        showModeratorBoard: false,
        showAdminBoard: false,
        currentUser: undefined,
      };
    }
  
    componentDidMount() {
      const user = AuthService.getCurrentUser();
  
      if (user) {
        this.setState({
          currentUser: user,
          showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
          showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        });
      }
    }
  
    logOut() {
      AuthService.logout();
    }
  
    render() {
      const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
        <nav className="navbar navbar-expand-lg  ">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color:"#F9AB55"}}/>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/About">About<span className="sr-only"></span>                  
          </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Workouts">Workout plans</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/shop">Shop</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Contact">Contact</a>
      </li>
      {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Login">Sign- in</a>
              </li>

              <li className="navbtn">
                <a class="button1" role="button" href="/Signup">Become a Member
                </a>
              </li>
            </div>
          )}
    </ul>
   
  </div>
</nav>
    );
  }
}

export default Navbar;