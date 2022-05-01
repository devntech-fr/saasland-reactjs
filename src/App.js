import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import Home from "homepages/Home";
import Price from "Pages/Price";
import Faq from "Pages/Faq";
import ServiceDetails from "Pages/ServiceDetails";
import SignIn from "Pages/SignIn";
import SignUp from "Pages/SignUp";
import NotFound from "Pages/404";
import TestimonialsSectionsSample from "sample-pages/TestimonialsSectionsSample";
import HomePages from "homepages/HomePages";
import ScrollToTopRoute from "ScrollToTopRoute";
import DevntechHome from "projects/devntech/Home";

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={HomePages.default} />
          <ScrollToTopRoute path={"/devntech"} component={DevntechHome} />
          <ScrollToTopRoute path={"/themes"} component={HomePages.default} />
          <ScrollToTopRoute path={"/sample-pages"} component={TestimonialsSectionsSample} />
          <ScrollToTopRoute path="/price" component={Price} />
          <ScrollToTopRoute path="/faq" component={Faq} />
          <ScrollToTopRoute path="/service-details" component={ServiceDetails} />
          <ScrollToTopRoute path="/signin" component={SignIn} />
          <ScrollToTopRoute path="/signup" component={SignUp} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
