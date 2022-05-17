import React, {useEffect, useState} from "react";
import {Route, Switch, useHistory, Link} from "react-router-dom";
import Themes from "homepages/Themes";

function Demo() {
    let history = useHistory();
    const [demos, setDemos] = useState(Themes);

    useEffect(() => {
        Object.keys(demos).forEach((theme, key) => {
            console.log('theme',theme);
        });
    },[demos]);

    const demoRoutes = () => {
        return Object.keys(demos).map((theme, key) => <Route exact={true} path={`/demo/${theme}`} component={Themes[theme]} key={key} />);
    }

    return (
        <Switch>
            {demoRoutes()}
        </Switch>
    )
}

export default Demo;
