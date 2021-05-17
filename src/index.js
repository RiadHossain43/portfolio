import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/app.scss?v=1.2.0";

import Index from "views/Index";
import Projects from "views/Projects";
import Contact from "views/Contact";
import Blogs from "views/Blogs";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route exact path="/projects" render={(props) => <Projects {...props} />} />
      <Route exact path="/blogs" render={(props) => <Blogs {...props} />} />
      <Route exact path="/contact" render={(props) => <Contact {...props} />} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
