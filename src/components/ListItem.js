import React, { Component } from "react";
import "../styles/listitem.css";
class ListItem extends Component {
  state = {};

  render() {
    return (
      <div className="wrapper">
        <button className="btn" onClick={this.props.onBtnClick} />
        <div className="details">
          <h3>{this.props.opis}</h3>
          <div className="details_minor">
            <i className="far fa-calendar icon_small" />
            <p>
              {this.props.currentDate === this.props.date
                ? "Today"
                : this.props.date}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
