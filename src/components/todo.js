import React, { Component } from "react";
import "../styles/todo.css";
import Tab from "./tab";
import myDay from "../images/myday.png";
import todo from "../images/todo1.jpg";
import completed from "../images/completed.png";
class Todo extends Component {
  state = {
    activeTab: "My Day",
    prevActiveTab: "My Day",
    components: [
      { name: "My Day", icons: "far fa-sun icon" },
      { name: "To-Do", icons: "far fa-calendar-check icon" },
      { name: "Completed", icons: "fas fa-check-double icon" }
    ],
    sections: [
      { name: "My Day", backgroundImage: myDay },
      { name: "To-Do", backgroundImage: todo },
      { name: "Completed", backgroundImage: completed }
    ]
  };

  /*Switch current active tab to clicked tab*/
  handleTabClick = name => {
    this.setState(prevState => ({
      prevActiveTab: prevState.activeTab,
      activeTab: name === this.state.activeTab ? this.state.activeTab : name
    }));
  };

  render() {
    return (
      <div className="main">
        <div className="left">
          {this.state.components.map(item => (
            <div
              key={item.name}
              className={
                this.state.activeTab === item.name
                  ? "selected sidebar"
                  : "sidebar"
              }
              onClick={() => {
                this.handleTabClick(item.name);
              }}
            >
              <i className={item.icons} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="right">
          <Tab
            active={this.state.activeTab}
            sections={this.state.sections}
            todos={this.props.todos}
            completed={this.props.completed}
            handleCompleted={this.props.handleCompleted}
            handleRemove={this.props.handleRemove}
            handleSubmit={this.props.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
