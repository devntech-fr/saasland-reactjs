import React from "react";

function IntegrationItem({ integration }) {
    return (
        <a href="/#" className="s_integration_item">
            <img src={integration.image} alt="" height={50}/>
            <h5>{integration.text}</h5>
        </a>
    )
}

IntegrationItem.defaultProps = {
    integration: {
        id: 100,
        image: "/img/new-home/webhooks.png",
        text: "Webhooks"
    }
}

export default IntegrationItem;
