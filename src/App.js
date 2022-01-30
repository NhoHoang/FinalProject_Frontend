import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer.js";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Message from "./pages/Message.js";
import Education from "./pages/Education";
import FoodBank from "./pages/FoodBank";
import SocialWelfare from "./pages/SocialWelfare";
import Water from "./pages/Water";
import WomanEmpowerment from "./pages/WomanEmpowerment";
import Qurbani from "./pages/Qurbani";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/foodbank" component={FoodBank} />
        <Route exact path="/socialwelfare" component={SocialWelfare} />
        <Route exact path="/water" component={Water} />
        <Route exact path="/womanempowerment" component={WomanEmpowerment} />
        <Route exact path="/qurbani" component={Qurbani} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
