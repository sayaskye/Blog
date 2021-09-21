import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}