import React, { Component } from "react";
import UserContext from "../context/UserContext";

class Word extends Component {
  static contextType = UserContext;
  render() {
    const { word } = this.props;
    return (
      <div className="word">
        <ul>
          <li>
            <h4>{word.original}</h4>
            <p>correct answer count: {word.correct_count}</p>
            <p> incorrect answer count: {word.incorrect_count}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Word;
