import React from "react";
import logo from "../images/logo4.png";
import userImage from "../images/user_profile.png";
import PropTypes from "prop-types";
import "../styles/header.css";
const Header = props => {
  return (
    <div className="full_header">
      <div className="header">
        <div className="logo_container">
          <img id="logo" src={logo} alt="logo" />
          <p>2doApp</p>
        </div>
        <div className="user_info">
          {props.user.name}
          <img id="user_pic" src={userImage} alt="user" />
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  user: PropTypes.object.isRequired
};
export default Header;
