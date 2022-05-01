import React from "react";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
/*------ Pages-----*/
import NotFound from "Pages/404";
import ScrollToTopRoute from "ScrollToTopRoute";
import PsychomotRouter from "projects/PsychomotRouter";

function Demo() {
    let history = useHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route exact={true} path={"/"} component={PsychomotRouter} />
                <ScrollToTopRoute component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Demo;
