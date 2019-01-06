import React, { Component } from "react";
import "../styles/newTodo.css";
class NewTodo extends Component {
  state = {
    isActive: false,
    opis: "",
    datum: ""
  };

  /*Expands the component*/
  handleActive = () => {
    this.setState({
      isActive: true
    });
  };

  /*Collapses the component*/
  handleDeactivate = () => {
    this.setState({
      isActive: false
    });
  };

  /*Updates new todo description and date*/
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  /*Fixes date format, collapses component and lets parent handle total state update*/
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    let newState = { ...this.state };
    let arr = newState.datum
      .split("-")
      .reverse()
      .join(".");
    this.handleDeactivate();
    this.setState({
      opis: "",
      datum: ""
    });
    this.props.handleSubmit(this.state.opis, arr);
  };

  render() {
    return (
      <div>
        {this.state.isActive ? (
          <div>
            <div className="new_todo" onClick={this.handleDeactivate}>
              <i className="fas fa-plus plus" />
              <p>Add a new To-Do</p>
            </div>
            <form className="form" onSubmit={e => this.handleSubmit(e)}>
              <label htmlFor="date">Due date:</label>
              <input
                id="date"
                type="date"
                name="datum"
                value={this.state.datum}
                onChange={e => this.handleUserInput(e)}
              />
              <label htmlFor="opis">Description</label>
              <textarea
                id="opis"
                name="opis"
                placeholder="Unesi opis"
                value={this.state.opis}
                onChange={e => this.handleUserInput(e)}
              />
              <button id="submit-btn">Submit</button>
            </form>
          </div>
        ) : (
          <div className="new_todo" onClick={this.handleActive}>
            <i className="fas fa-plus plus" />
            <p>Add a new To-Do</p>
          </div>
        )}
      </div>
    );
  }
}

export default NewTodo;
