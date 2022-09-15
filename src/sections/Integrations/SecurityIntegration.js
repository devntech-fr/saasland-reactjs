import React from 'react';
import { displayTitle } from "components/Content/RichContent";
import IntegrationItem from "components/Support/IntegrationItem";

const SecurityIntegration = ({ title, integrations }) => {
    return(
        <section className="security_integration_area">
            <div className="container">
                <div className="hosting_title analytices_title text-center">
                    <h2 className="wow fadeInUp" dangerouslySetInnerHTML={displayTitle(title)}></h2>
                </div>
                <div className="row">
                    {integrations.map((integration, key) => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={key}>
                            <IntegrationItem integration={integration}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SecurityIntegration;

SecurityIntegration.defaultProps = {
    title: `<span>Discover just how </span>Awesome access control can be.`,
    integrations: [
        {
            id: 100,
            image: "/img/new-home/kissmetrics.png",
            text: "KISSmetrics"
        },
        {
            id: 101,
            image: "/img/new-home/metorik.png",
            text: "Metorik"
        },
        {
            id: 102,
            image: "/img/new-home/nicereply-1.png",
            text: "Nicereply"
        },
        {
            id: 103,
            image: "/img/new-home/campfire.png",
            text: "Campfire"
        },
        {
            id: 104,
            image: "/img/new-home/webhooks.png",
            text: "Webhooks"
        },
        {
            id: 105,
            image: "/img/new-home/briteverify.png",
            text: "BriteVerify"
        }
    ]
}
