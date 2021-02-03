import React, { Component } from "react";
import UserContext from "../context/UserContext";
import Button from "./Button";

class Prompt extends Component {
  static contextType = UserContext;

  renderCorrect = () => {
    const { word, guess } = this.props;

    return (
      <div className="correct">
        <h2 className="learn-header">Correct</h2>
        <div className="DisplayFeedback">
          <p>
            {word.nextWord} means: {guess}
          </p>
        </div>
        <div className="DisplayScore">
          <p>Your current score is: {this.context.nextWord.totalScore}</p>
        </div>
      </div>
    );
  };

  renderIncorrect = () => {
    const { word, guess } = this.props;

    return (
      <div className="incorrect">
        <h2 className="learn-header">{"Keep trying!"}</h2>
        <div className="DisplayFeedback">
          <p>
            {word.nextWord} actually means: {this.context.nextWord.answer}. You
            tried "{guess}".
          </p>
        </div>
        <div className="DisplayScore">
          <p>Your current score is: {this.context.nextWord.totalScore}</p>
        </div>
      </div>
    );
  };
  handleNext = () => {
    this.props.clearPrompt();
    this.props.clearGuess();
    this.props.setNewWord(this.context.nextWord);
  };
  render() {
    return (
      <div>
        {this.context.nextWord.isCorrect === true
          ? this.renderCorrect()
          : this.renderIncorrect()}
        <Button onClick={() => this.handleNext()}>Next word</Button>
      </div>
    );
  }
}

export default Prompt;
