import "react-app-polyfill/ie11";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CharacterPage from "./components/CharacterPage/CharacterPage";
import Card from "./components/Card/Card";

import { fleurimondColors } from "./components/theme";

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    minWidth: 0,
    fontSize: "1rem",
    color: fleurimondColors.black,
    lineHeight: "normal",
    fontWeight: 600,
    padding: "",
    height: "100vw",
    width: "100%",
    backgroundColor: fleurimondColors.white,
  },
});

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/CharacterPage" component={CharacterPage} />
      </Switch>
    </Router>
  );
};

export default App;
