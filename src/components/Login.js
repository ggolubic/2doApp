import React, { Component } from "react";
import Loading from "../components/Loading";
import "../styles/register.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: this.props.loading
  };

  handleInputChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      loading: !prevState.loading
    }));
    this.props.handleLogin(this.state.email, this.state.password);
  };

  render() {
    return (
      <div>
        <div className="formInfo">
          <h3>Log in</h3>
          <p>Fill in the form below to get instant access.</p>
          {this.state.loading ? <Loading /> : null}
        </div>

        <form className="registerForm" onSubmit={this.handleFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.handleInputChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.handleInputChange(e)}
          />
          {this.props.error ? (
            <span className="error">Wrong Email or Password!</span>
          ) : null}
          <button type="Submit" className="submitBtn">
            Log me in!
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
