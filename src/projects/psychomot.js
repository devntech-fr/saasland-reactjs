import React, { useEffect } from "react";
import {Route, Switch, useRouteMatch, useHistory} from "react-router-dom";
import Home from "projects/psychomot/Home";
import WorkInProgress from "projects/psychomot/WorkInProgress";
import About from "projects/psychomot/About";
import WorkOffice from "projects/psychomot/WorkOffice";
import ContactMe from "projects/psychomot/ContactMe";

function PsychoProject() {
    const match = useRouteMatch();
    const history = useHistory();
    const redirect = () => {
        history.push('/psychomot');
    }
    useEffect(() => {
        console.log('match',match);
        if (match.url !== '/psychomot') {
            // redirect();
            console.log('no base url');
        }
    }, [match]);
    return (
        <Switch>
            <Route exact={true} path={`/`} component={Home}/>
            <Route exact={true} path={`/a-propos`} component={About}/>
            <Route exact={true} path={`/le-cabinet`} component={WorkOffice}/>
            <Route exact={true} path={`/la-psychomotricite`} component={About}/>
            <Route exact={true} path={`/contact`} component={ContactMe}/>
            <Route exact={true} path={`/wip`} component={WorkInProgress}/>
        </Switch>
    )
}

export default PsychoProject;
