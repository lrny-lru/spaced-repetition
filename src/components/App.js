import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";
import RegistrationRoute from "../routes/RegistrationRoute";
import LoginRoute from "../routes/LoginRoute";
import DashboardRoute from "../routes/DashboardRoute";
import LearningRoute from "../routes/LearningRoute";
import NotFoundRoute from "../routes/NotFoundRoute";

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          <div className="main">
            {hasError && <p>There was an error! Oh no!</p>}
            <Switch>
              <PrivateRoute exact path={"/"} component={DashboardRoute} />
              <PrivateRoute path={"/learn"} component={LearningRoute} />
              <PublicOnlyRoute
                path={"/register"}
                component={RegistrationRoute}
              />
              <PublicOnlyRoute path={"/login"} component={LoginRoute} />
              <Route component={NotFoundRoute} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
