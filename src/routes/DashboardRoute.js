import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import UserService from "../services/user-service";
import WordList from "../components/WordList";

class DashboardRoute extends Component {
  static contextType = UserContext;
  state = {
    width: `${this.context.score}%`,
  };

  componentDidMount() {
    UserService.getUserData().then((data) => {
      this.context.setLanguage(data.language.name);
      this.context.setScore(data.language.total_score);
      this.context.setWords(data.words);
    });
  }

  render() {
    return (
      <section className="dashboard-main">
        <div className="dashboard-header">
          <h2>{this.context.language}</h2>
          <p>Total correct answers: {this.context.score}</p>
          <Link className="btn" to="/learn">
            Start practicing
          </Link>
          <h3>Words to practice</h3>
        </div>
        <WordList />
      </section>
    );
  }
}

export default DashboardRoute;
