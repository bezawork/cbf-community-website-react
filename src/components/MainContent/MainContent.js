import React, { Component } from "../../../node_modules/react";
import {
  BrowserRouter,
  Route,
  Switch
} from ".../../../node_modules/react-router-dom";
import Navigationbar from "../Navigationbar/Navigationbar";
import Layout from "../Layout/Layout";
import Home from "../Home";
import About from "../About";
import Blog from "../Blog";
import Testimonials from "../Testimonials";
import Workshops from "../Workshops";
import Events from "../Events";
import Sponsors from "../Sponsors";
import Donate from "../Donate";
import Contacts from "../Contacts";

class MainContent extends Component {
  render() {
    return (
      <Layout>
        <BrowserRouter>
          <Navigationbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Blog" component={Blog}></Route>
            <Route path="/Testimonials" component={Testimonials}></Route>
            <Route path="/Workshops" component={Workshops}></Route>
            <Route path="/Events" component={Events}></Route>
            <Route path="/Sponsors" component={Sponsors}></Route>
            <Route path="/Donate" component={Donate}></Route>
            <Route path="/Contacts" component={Contacts}></Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default MainContent;
