import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
/*------ Pages-----*/
import NotFound from "Pages/404";
import ScrollToTopRoute from "ScrollToTopRoute";
import PsychoProject from "projects/psychomot";
import HomePages from "homepages/HomePages";
import Contact from "Pages/Contact";
import SamplePages from "sample-pages/SamplePages";
import About from "projects/psychomot/About";
import WorkOffice from "projects/psychomot/WorkOffice";
import ContactMe from "projects/psychomot/ContactMe";
import WorkInProgress from "projects/psychomot/WorkInProgress";

function Demo({ hideLoader }) {
    let history = useHistory();

    useEffect(() => {
        console.log('demo');
        hideLoader();
    }, [hideLoader]);

    return (
        <Router history={history}>
            <Switch>
                <Route exact={true} path={"/"} component={PsychoProject} />
                <Route exact={true} path={`/a-propos`} component={About}/>
                <Route exact={true} path={`/le-cabinet`} component={WorkOffice}/>
                <Route exact={true} path={`/la-psychomotricite`} component={About}/>
                <Route exact={true} path={`/contact`} component={ContactMe}/>
                <Route exact={true} path={`/wip`} component={WorkInProgress}/>
                <Route path={"/psychomot"} component={PsychoProject} />
                <Route path={"/home"} component={HomePages.homes} />
                <Route path={"/sample"} component={SamplePages} />
                {/*<Route path={"/digital-marketing"} component={HomeMarketing} />*/}
                {/*<Route path={"/app-showcase"} component={HomeAppShowcase} />*/}
                {/*<Route path={"/chat"} component={HomeChat} />*/}
                {/*<ScrollToTopRoute path={"/sample-pages"} component={TestimonialsSectionsSample} />*/}
                {/*<ScrollToTopRoute path="/About" component={About} />*/}
                {/*<ScrollToTopRoute path="/Services" component={Service} />*/}
                {/*<ScrollToTopRoute path="/Process" component={Process} />*/}
                {/*<ScrollToTopRoute path="/Team" component={Team} />*/}
                {/*<ScrollToTopRoute path="/Portfolio-2col" component={Portfolio2col} />*/}
                {/*<ScrollToTopRoute path="/Portfolio-3col" component={Portfolio3col} />*/}
                {/*<ScrollToTopRoute*/}
                {/*    path="/Portfolio-fullwidth-4col"*/}
                {/*    component={Portfoliofull4col}*/}
                {/*/>*/}
                {/*<ScrollToTopRoute*/}
                {/*    path="/PortfolioSingle"*/}
                {/*    component={PortfolioSingle}*/}
                {/*/>*/}
                {/*<ScrollToTopRoute path="/BlogListPage" component={BlogListPage} />*/}
                {/*<ScrollToTopRoute path="/BlogSinglePage" component={BlogSinglePage} />*/}
                {/*<ScrollToTopRoute path="/BlogGridPage" component={BlogGridPage} />*/}
                {/*<ScrollToTopRoute path="/Contact" component={Contact} />*/}
                {/*<ScrollToTopRoute path="/SupportPrice" component={Price} />*/}
                {/*<ScrollToTopRoute path="/Faq" component={Faq} />*/}
                {/*<ScrollToTopRoute path="/ServiceDetails" component={ServiceDetails} />*/}
                {/*<ScrollToTopRoute path="/SignIn" component={SignIn} />*/}
                {/*<ScrollToTopRoute path="/SignUp" component={SignUp} />*/}
                <ScrollToTopRoute component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Demo;
