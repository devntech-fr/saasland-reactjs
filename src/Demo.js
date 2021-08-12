import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import { Home } from "./homepages/Home";
import DigitalMarketing from "./homepages/Digital-marketing";
import PaymentProcessing from "./homepages/Payment-processing";
import HRManagement from "./homepages/HR-Management";
import Startup from "./homepages/Startup";
import HomeCRM from "./homepages/Home-CRM";
import Landing from "./homepages/Landing";
import HomeSupport from "./homepages/home-support";
import homeERP from "./homepages/Home-ERP";
import homeHosting from "./homepages/HomeHosting";
import homeSecurity from "./homepages/HomeSecurity";
import homeSoftwareDark from "./homepages/Home-software-dark";
import HomeAppShowcase from "./homepages/Home-app-showcase";
import HomeCloud from "./homepages/Home-cloud";
import HomeTracking from "./homepages/Home-tracking";
import HomeEvent from "./homepages/Home-event";
import HomeChat from "./homepages/Home-chat";

import About from "./Pages/About";
import Service from "./Pages/Service";
import Process from "./Pages/Process";
import Team from "./Pages/Team";
import Portfolio2col from "./Pages/Portfolio-2col";
import Portfolio3col from "./Pages/Portfolio-3col";
import Portfoliofull4col from "./Pages/Portfolio-fullwidth-4col";
import PortfolioSingle from "./Pages/PortfolioSingle";
import BlogListPage from "./Pages/BlogListPage";
import BlogSinglePage from "./Pages/BlogSinglePage";
import Contact from "./Pages/Contact";
import Price from "./Pages/Price";
import Faq from "./Pages/Faq";
import ServiceDetails from "./Pages/ServiceDetails";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BlogGridPage from "./Pages/BlogGridPage";
import NotFound from "./Pages/404";
import TestimonialsSectionsSample from "./sample-pages/TestimonialsSectionsSample";
import ScrollToTopRoute from "./ScrollToTopRoute";

class Demo extends Component {
    componentDidMount() {
        this.props.hideLoader();
    }
    render() {
        return (
            <Router>
                <Switch>
                    <ScrollToTopRoute exact={true} path={"/"} component={Home} />
                    <ScrollToTopRoute path={"/sample-pages"} component={TestimonialsSectionsSample} />
                    <ScrollToTopRoute
                        path="/Digital-marketing"
                        component={DigitalMarketing}
                    />
                    <ScrollToTopRoute
                        path="/Payment-processing"
                        component={PaymentProcessing}
                    />
                    <ScrollToTopRoute path="/HR-Management" component={HRManagement} />
                    <ScrollToTopRoute path="/Startup" component={Startup} />
                    <ScrollToTopRoute path="/Home-CRM" component={HomeCRM} />
                    <ScrollToTopRoute path="/About" component={About} />
                    <ScrollToTopRoute path="/Service" component={Service} />
                    <ScrollToTopRoute path="/Process" component={Process} />
                    <ScrollToTopRoute path="/Team" component={Team} />
                    <ScrollToTopRoute path="/Portfolio-2col" component={Portfolio2col} />
                    <ScrollToTopRoute path="/Portfolio-3col" component={Portfolio3col} />
                    <ScrollToTopRoute
                        path="/Portfolio-fullwidth-4col"
                        component={Portfoliofull4col}
                    />
                    <ScrollToTopRoute
                        path="/PortfolioSingle"
                        component={PortfolioSingle}
                    />
                    <ScrollToTopRoute path="/BlogListPage" component={BlogListPage} />
                    <ScrollToTopRoute path="/BlogSinglePage" component={BlogSinglePage} />
                    <ScrollToTopRoute path="/BlogGridPage" component={BlogGridPage} />
                    <ScrollToTopRoute path="/Contact" component={Contact} />
                    <ScrollToTopRoute path="/Landing" component={Landing} />
                    <ScrollToTopRoute path="/home-support" component={HomeSupport} />
                    <ScrollToTopRoute path="/HomeHosting" component={homeHosting} />
                    <ScrollToTopRoute path="/Home-ERP" component={homeERP} />
                    <ScrollToTopRoute path="/HomeSecurity" component={homeSecurity} />
                    <ScrollToTopRoute
                        path="/HomeAppShowcase"
                        component={HomeAppShowcase}
                    />
                    <ScrollToTopRoute
                        path="/Home-software-dark"
                        component={homeSoftwareDark}
                    />
                    <ScrollToTopRoute path="/Home-cloud" component={HomeCloud} />
                    <ScrollToTopRoute path="/Home-Tracking" component={HomeTracking} />
                    <ScrollToTopRoute path="/Home-event" component={HomeEvent} />
                    <ScrollToTopRoute path="/Home-chat" component={HomeChat} />
                    <ScrollToTopRoute path="/Price" component={Price} />
                    <ScrollToTopRoute path="/Faq" component={Faq} />
                    <ScrollToTopRoute path="/ServiceDetails" component={ServiceDetails} />
                    <ScrollToTopRoute path="/SignIn" component={SignIn} />
                    <ScrollToTopRoute path="/SignUp" component={SignUp} />
                    <ScrollToTopRoute component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default Demo;
