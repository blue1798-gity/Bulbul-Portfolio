import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div
        data-aos={this.props.aos}
        data-aos-offset={this.props.aos_offset}
        className="cards"
      >
        <img src={this.props.emoji} alt="" />
        <span>{this.props.descript}</span>
      </div>
    );
  }
}

export default Card;
