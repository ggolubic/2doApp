import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import "../styles/userForm.css";

class UserForm extends Component {
  state = {
    active: Register,
    isActive: "Register"
  };

  componentDidMount() {
    document.querySelector("body").style.overflow = "hidden";
  }
  componentWillUnmount() {
    document.querySelector("body").style.overflow = "auto";
  }

  handleClick = e => {
    const name = e.currentTarget.id;
    if (name === "Login") {
      this.setState({
        active: Login,
        isActive: "Login"
      });
    } else {
      this.setState({
        active: Register,
        isActive: "Register"
      });
    }
  };

  render() {
    let Tagname = this.state.active;

    return (
      <div className="registerFormWrapper">
        <div className="registerFormParent">
          <div className="switch">
            <div
              id="Register"
              className={this.state.isActive === "Register" ? "" : "inactive"}
              onClick={e => this.handleClick(e)}
            >
              <p>Register</p>
            </div>
            <div
              id="Login"
              className={this.state.isActive === "Login" ? "" : "inactive"}
              onClick={e => this.handleClick(e)}
            >
              <p>Login</p>
            </div>
          </div>
          <Tagname //rendering Login or Register depending on active clicked item
            handleNewUser={this.props.handleNewUser}
            handleLogin={this.props.handleLogin}
            error={this.props.loginError}
            loading={this.props.loading}
          />
        </div>
      </div>
    );
  }
}

export default UserForm;
