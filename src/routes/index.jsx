import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import PostsSlug from "../views/Dynamic/PostsSlug";
import CategoriesSlug from "../views/Dynamic/CategoriesSlug";
import SubCategoriesSlug from "../views/Dynamic/SubCategoriesSlug";
import ScrollToTop from '../components/hooks/ScrollToTop'
import ErrorPage from "../views/404";

export default function Routes() {
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/articles/:slug">
          <PostsSlug/>
        </Route>
        <Route path="/categories/:slug">
          <CategoriesSlug/>
        </Route>
        <Route path="/subcategories/:slug">
          <SubCategoriesSlug/>
        </Route>
        <Route path="*">
          <ErrorPage/>
        </Route>
      </Switch>
    </Router>
  );
}