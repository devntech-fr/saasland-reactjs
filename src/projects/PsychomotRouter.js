import React from "react";
import {Route, Switch, useHistory, Router} from "react-router-dom";
import Home from "projects/psychomot/Home";
import WorkInProgress from "projects/psychomot/WorkInProgress";
import About from "projects/psychomot/About";
import WorkOffice from "projects/psychomot/WorkOffice";
import ContactMe from "projects/psychomot/ContactMe";

function PsychomotRouter() {
    const history = useHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route exact={true} path={`/`} component={Home}/>
                <Route exact={true} path={`/a-propos`} component={About}/>
                <Route exact={true} path={`/le-cabinet`} component={WorkOffice}/>
                <Route exact={true} path={`/la-psychomotricite`} component={About}/>
                <Route exact={true} path={`/contact`} component={ContactMe}/>
                <Route exact={true} path={`/wip`} component={WorkInProgress}/>
            </Switch>
        </Router>
    )
}

export default PsychomotRouter;
