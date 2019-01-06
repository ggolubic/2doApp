import React, { Component } from "react";
import logo from "../images/logo4.png";
import userImage from "../images/user_profile.png";
import "../styles/header.css";
class Header extends Component {
  state = {};

  render() {
    return (
      <div className="full_header">
        <div className="header">
          <div className="logo_container">
            <img id="logo" src={logo} alt="logo" />
            <p>2doApp</p>
          </div>
          <div className="user_info">
            {this.props.user.name}
            <img id="user_pic" src={userImage} alt="user" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
