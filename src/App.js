import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import Home from "./pages/Home.js";
import GioiThieu from "./pages/GioiThieu.js";
import DongGop from "./pages/DongGop.js";
import HuongDanDongGop from "./pages/HuongDanDongGop";

import Signup from "./pages/Signup";
import SocialWelfare from "./pages/SocialWelfare";
import Water from "./pages/Water";
import WomanEmpowerment from "./pages/WomanEmpowerment";
import Qurbani from "./pages/Qurbani";
import SignIn from "./pages/SignIn";
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
        <Route exact path="/about" component={GioiThieu} />
        <Route exact path="/message" component={DongGop} />
        <Route exact path="/womanempowerment" component={HuongDanDongGop} />
        <Route exact path="/education" component={SignIn} />
        <Route exact path="/foodbank" component={Signup} />
        <Route exact path="/socialwelfare" component={SocialWelfare} />
        <Route exact path="/water" component={Water} />
        <Route exact path="/womanempowerment" component={WomanEmpowerment} />
        <Route exact path="/qurbani/:id" component={Qurbani} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
