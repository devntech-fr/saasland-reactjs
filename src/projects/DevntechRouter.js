import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "projects/devntech/Home";
import ServicesPage from "projects/devntech/Services";
import PortfolioPage from "projects/devntech/Portfolio";
import EstimatePage from "projects/devntech/Estimate";
import ContactPage from "projects/devntech/ContactPage";

function DevntechRouter() {
    return (
        <Switch>
            <Route exact={true} path={`/`} component={Home}/>
            <Route exact={true} path={`/services`} component={ServicesPage}/>
            <Route exact={true} path={`/realisations`} component={PortfolioPage}/>
            <Route exact={true} path={`/contact`} component={ContactPage}/>
            <Route path={`/demander-un-devis`} component={EstimatePage}/>
        </Switch>
    )
}

export default DevntechRouter;
