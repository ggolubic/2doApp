import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/register.css";
class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordTwice: "",
    emailValid: true,
    passwordValid: true,
    error: ""
  };

  static PropTypes = {
    handleNewUser: PropTypes.func.isRequired
  };

  handleInputChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    this.setState({ [name]: value });
  };

  handleEmailValidation = e => {
    const value = this.state.email;
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (emailValid) {
      e.currentTarget.classList.remove("invalid");
      this.setState({
        emailValid: true
      });
    } else {
      e.currentTarget.classList.add("invalid");
      this.setState({
        emailValid: false
      });
    }
  };
  handlePasswordValidation = e => {
    console.log(e.currentTarget.classList);
    if (this.state.password.length >= 8) {
      e.currentTarget.classList.remove("invalid");
      this.setState({
        passwordValid: true
      });
    } else {
      e.currentTarget.classList.add("invalid");
      this.setState({
        passwordValid: false
      });
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.handleNewUser(
      this.state.name,
      this.state.email,
      this.state.password
    );
  };

  render() {
    return (
      <div>
        <div className="formInfo">
          <h3>Sign up now</h3>
          <p>Fill in the form below to get instant access.</p>
        </div>
        <form className="registerForm" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={e => this.handleInputChange(e)}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.handleInputChange(e)}
            onBlur={this.handleEmailValidation}
          />
          <span className="error">
            {this.state.emailValid === true ? "" : "Email not valid"}
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.handleInputChange(e)}
            onBlur={this.handlePasswordValidation}
          />
          <span className="error">
            {this.state.passwordValid === true ? "" : "Password too short"}
          </span>
          <button
            type="Submit"
            className="submitBtn"
            disabled={!(this.state.emailValid && this.state.passwordValid)}
          >
            Sign me up!
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
