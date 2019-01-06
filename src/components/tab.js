import React, { Component } from "react";
import "../styles/tab.css";
import Time from "./time";
import ListItem from "./ListItem";
import NewTodo from "./newTodo";
class Tab extends Component {
  state = {};

  findCurrentDate() {
    const datum = new Date()
      .toJSON() //date pretvori u string
      .slice(0, 10) //odvoji prvih 10 karaktera od ostatka
      .split("-") //razdvoji prvih 10 karaktera po -
      .reverse() //reversaj polje
      .join("."); //spoji elemente polja u string s .
    return datum;
  }

  /*Nađi trenutni section za prikazivanje*/
  findSection() {
    const section = this.props.sections.find(
      item => item.name === this.props.active
    );
    return section;
  }

  /*Oboji btn u zeleno i proslijedi hendlanje u parent */
  handleTodoDone(e, index) {
    e.preventDefault();
    const btn = e.target;
    btn.classList.toggle("green");
    this.props.handleCompleted(btn, index);
  }

  /*Zatrazi potvrdu od korisnika i proslijedi hendlanje u parent*/
  handleCompleteClick(index) {
    const answer = prompt("Napisite DA ako zelite removat za stalno");
    return answer === "DA" ? this.props.handleRemove(index) : null;
  }

  render() {
    const section = this.findSection();
    const datum = this.findCurrentDate();
    return (
      <div>
        <div
          className="section_Header"
          style={{
            backgroundImage: `url(${section.backgroundImage}`
          }}
        >
          <h1>{section.name}</h1>
          <Time />
        </div>
        <div className="fixed_div">
          <NewTodo handleSubmit={this.props.handleSubmit} />
          <div className="todos">
            {section.name === "Completed"
              ? this.props.completed.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      opis={item.opis}
                      date={item.datum}
                      currentDate={datum}
                      onBtnClick={() => {
                        this.handleCompleteClick(index);
                      }}
                    />
                  );
                })
              : this.props.todos.map((item, index) => {
                  if (section.name === "My Day") {
                    if (item.datum === datum) {
                      return (
                        <ListItem
                          key={index}
                          opis={item.opis}
                          date={item.datum}
                          currentDate={datum}
                          onBtnClick={e => this.handleTodoDone(e, index)}
                        />
                      );
                    }
                  } else {
                    return (
                      <ListItem
                        key={index}
                        opis={item.opis}
                        date={item.datum}
                        currentDate={datum}
                        onBtnClick={e => this.handleTodoDone(e, index)}
                      />
                    );
                  }
                  return null;
                })}
          </div>
        </div>
      </div>
    );
  }
}
export default Tab;
