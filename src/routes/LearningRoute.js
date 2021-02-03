import React, { Component } from "react";
import LearningCard from "../components/LearningCard";
import UserService from "../services/user-service";
import Prompt from "../components/Prompt";

class LearningRoute extends Component {
  state = {
    word: {},
    err: "",
    prompt: null,
    guess: "",
  };
  componentDidMount() {
    UserService.getWordCard()
      .then((data) => this.setState({ word: data }))
      .catch((data) => this.setState({ err: data }));
  }

  setPrompt = () => {
    this.setState({ prompt: true });
  };
  setGuess = (e) => {
    this.setState({ guess: e.target.value });
  };
  clearPrompt = () => {
    this.setState({ prompt: null });
  };
  clearGuess = () => {
    this.setState({ guess: "" });
  };

  setNewWord = (word) => {
    this.setState({
      word: word,
    });
  };

  renderPrompt = () => {
    if (this.state.prompt === true) {
      return (
        <Prompt
          word={this.state.word}
          guess={this.state.guess}
          clearGuess={this.clearGuess}
          clearPrompt={this.clearPrompt}
          setNewWord={this.setNewWord}
        />
      );
    }
  };
  render() {
    return (
      <section>
        {this.state.prompt === true ? (
          this.renderPrompt()
        ) : (
          <LearningCard
            word={this.state.word}
            score={this.state.score}
            guess={this.state.guess}
            setPrompt={this.setPrompt}
            setGuess={this.setGuess}
          />
        )}
      </section>
    );
  }
}

export default LearningRoute;
