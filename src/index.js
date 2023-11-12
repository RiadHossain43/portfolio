import { createRoot } from "react-dom/client";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/app.scss?v=1.2.0";

import Blogs from "views/Blogs";
import Contact from "views/Contact";
import Index from "views/Index";
import Projects from "views/Projects";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route
        exact
        path="/projects"
        render={(props) => <Projects {...props} />}
      />
      <Route exact path="/blogs" render={(props) => <Blogs {...props} />} />
      <Route exact path="/contact" render={(props) => <Contact {...props} />} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
