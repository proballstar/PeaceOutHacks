import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Navbar from "./screens/Navbar";
import FormPage from "./screens/FormPage";
import BlogpPage from "./screens/BlogpPage";
import HomePage from "./screens/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/formpage" component={FormPage} />
          <Route path="/blogppage" component={BlogpPage} />
        </Switch>
      </div>
    </Router>
  );
}
