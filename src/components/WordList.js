import React, { Component } from "react";
import Word from "./Word";
import UserContext from "../context/UserContext";

class WordList extends Component {
  static contextType = UserContext;

  renderWords() {
    return this.context.words.map((word, i) => <Word key={i} word={word} />);
  }

  render() {
    return (
      <div className="wordlist-div">
        {this.context.words.length === 0 ? (
          <div className="list">
            <p>No Words found for this language</p>
          </div>
        ) : (
          <div className="list">{this.renderWords()}</div>
        )}
      </div>
    );
  }
}

export default WordList;
