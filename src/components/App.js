import React, { Component } from "react";
import Header from "./Header";
import Todo from "./todo";
import Footer from "./footer";
import UserForm from "./UserForm";

class App extends Component {
  state = {
    user: {
      name: "Default",
      avatar: "../images/user_profile.png",
      password: "1234qwer",
      email: "nikola.novak@gmail.com"
    },
    loginError: false,
    validUser: false,
    loading: false,
    todo: [
      {
        opis: "Napravi prvu todo componentu",
        datum: "06.12.2018"
      },
      {
        opis: "Napravi drugu todo componentu",
        datum: "05.12.2018"
      },
      {
        opis: "Napravi prvu todo componentu",
        datum: "06.12.2018"
      },
      {
        opis: "Napravi prvu todo componentu",
        datum: "05.12.2018"
      },
      {
        opis: "Napravi prvu todo componentu",
        datum: "05.12.2018"
      },
      {
        opis: "Napravi prvu todo componentu",
        datum: "06.12.2018"
      },
      {
        opis: "Napravi prvu todo componentu",
        datum: "12.12.2018"
      },
      {
        opis: "Napravi prvu todo componentu",
        datum: "12.12.2018"
      },
      {
        opis: "Napravi prvu todo componentu",
        datum: "12.12.2018"
      },
      {
        opis: "Napravi prvu todo componentu",
        datum: "12.12.2018"
      },
      {
        opis: "Napravi prvu todo componentu",
        datum: "12.12.2018"
      }
    ],
    completed: []
  };

  /*Move item from todo to completed, fix green btn bug*/
  handleCompleted = (btn, index) => {
    let newState = { ...this.state };
    newState.completed.push(newState.todo[index]); //Push completed item into completed
    newState.todo.splice(index, 1); //Remove completed item from todo
    setTimeout(() => {
      btn.classList.toggle("green");
      this.setState({
        newState
      });
    }, 250);
  };

  /*Remove item from completed*/
  handleRemove = index => {
    let newCompleted = [...this.state.completed];
    newCompleted.splice(index, 1);
    this.setState({
      completed: newCompleted
    });
  };

  /*Add item to todo*/
  handleSubmit = (opis, datum) => {
    const newTodo = [...this.state.todo];
    newTodo.push({ opis: opis, datum: datum });
    this.setState({
      todo: newTodo
    });
  };

  /*Add new user to state*/

  handleNewUser = (name, email, password) => {
    const user = { ...this.state.user };
    user.name = name;
    user.email = email;
    user.password = password;
    this.setState({
      user: user,
      validUser: true,
      loading: false
    });
  };

  /*Check if user exists and validate info*/
  handleLogin = (email, password) => {
    if (
      this.state.user.email === email &&
      this.state.user.password === password
    ) {
      const name = email.slice(0, email.indexOf("@")); //extract name
      const user = { ...this.state.user };
      user.name = name;
      this.setState({
        validUser: true,
        loginError: false,
        loading: false,
        user: user
      });
    } else {
      this.setState({ loginError: true, loading: false });
    }
  };

  render() {
    return (
      <div>
        {!this.state.validUser ? (
          <UserForm
            handleNewUser={this.handleNewUser}
            handleLogin={this.handleLogin}
            loginError={this.state.loginError}
            loading={this.state.loading}
          />
        ) : null}
        <Header user={this.state.user} />
        <Todo
          user={this.state.user}
          todos={this.state.todo}
          completed={this.state.completed}
          handleSubmit={this.handleSubmit}
          handleCompleted={this.handleCompleted}
          handleRemove={this.handleRemove}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
