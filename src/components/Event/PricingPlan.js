import React from "react";

function PricingPlan({ label, currency, price, features, buttonLink, popular }) {
    const listFeatures = () => {
        features.map(feature => {
            console.log('feature label',feature.label);
            console.log('feature incluse',feature.included);
            return (
                <li key={feature.id}>
                    {feature.label} <i className={`ti-${feature.included ? `check` : `close`}`}></i>
                </li>
            )
        })
    }
    return (
        <div className="analytices_price_item event_price_item wow fadeInUp">
            <div className="p_head">
                <h5>{label}</h5>
                {popular && <h6 className="tag">
                    <i className="icon_ribbon_alt"></i>Most popular
                </h6>}
                <div className="rate">{currency} {price}</div>
            </div>
            <ul className="list-unstyled p_body">
                {
                    features.map(feature => {
                        return (
                            <li key={feature.id}>
                                {feature.label} <i className={`ti-${feature.included ? `check` : `close`}`}></i>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="text-center">
                {
                    buttonLink && (
                        <a href={buttonLink.href} target={buttonLink.target} className="event_btn event_btn_two btn_hover">
                            {buttonLink.label}
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default PricingPlan;
