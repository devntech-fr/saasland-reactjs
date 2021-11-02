import React from "react";
import HomeMarketing from "homepages/HomeMarketing";
import Home from "homepages/Home";
import HomeAppShowcase from "homepages/HomeAppShowcase";
import HomeChat from "homepages/HomeChat";
import HomeCloud from "homepages/HomeCloud";
import HomeCRM from "homepages/HomeCRM";
import HomeErp from "homepages/HomeErp";
import HomeEvent from "homepages/HomeEvent";
import HomeSoftwareDark from "homepages/HomeSoftwareDark";
import HomeSupport from "homepages/HomeSupport";
import HomeTracking from "homepages/HomeTracking";
import HomeSecurity from "homepages/HomeSecurity";
import HomeHosting from "homepages/HomeHosting";
import HRManagement from "homepages/HR-Management";
import Landing from "homepages/Landing";
import PaymentProcessing from "homepages/Payment-processing";
import Startup from "homepages/Startup";
import {Route, Switch} from "react-router-dom";

function HomeSwitch({ match }) {
    console.log('match url',match.url)
    if (match.url === "/home") {
        let prefix = match.url;
        return (
            <Switch>
                <Route path={prefix+"/marketing"} component={HomeMarketing} />
                <Route path={prefix+"/app"} component={HomeAppShowcase} />
                <Route path={prefix+"/chat"} component={HomeChat} />
                <Route path={prefix+"/cloud"} component={HomeCloud} />
                <Route path={prefix+"/crm"} component={HomeCRM} />
                <Route path={prefix+"/erp"} component={HomeErp} />
                <Route path={prefix+"/event"} component={HomeEvent} />
                <Route path={prefix+"/software"} component={HomeSoftwareDark} />
                <Route path={prefix+"/support"} component={HomeSupport} />
                <Route path={prefix+"/tracking"} component={HomeTracking} />
                <Route path={prefix+"/security"} component={HomeSecurity} />
                <Route path={prefix+"/hosting"} component={HomeHosting} />
                <Route path={prefix+"/management"} component={HRManagement} />
                <Route path={prefix+"/landing"} component={Landing} />
                <Route path={prefix+"/payment"} component={PaymentProcessing} />
                <Route path={prefix+"/startup"} component={Startup} />
            </Switch>
        )
    }

}

export default {
    default: Home,
    marketing: HomeMarketing,
    appShowcase: HomeAppShowcase,
    chat: HomeChat,
    cloud: HomeCloud,
    crm: HomeCRM,
    event: HomeEvent,
    software: HomeSoftwareDark,
    support: HomeSupport,
    tracking: HomeTracking,
    erp: HomeErp,
    hosting: HomeHosting,
    security: HomeSecurity,
    hr: HRManagement,
    landing: Landing,
    payment: PaymentProcessing,
    startup: Startup,
    homes: HomeSwitch
}
