import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import ScrollToTop from '../components/hooks/ScrollToTop'

export default function Routes() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}