import React from "react";

function TrackingPrice({ price }) {
    const { currency, amount, period, label, features } = price;
    return (
        <div className="d-flex track_body">
            <div className="track_price">
                <h3>{currency} {amount}</h3>
                <h6>{period}</h6>
            </div>
            <div className="track_text">
                <h4>{label}</h4>
                <ul className="list-unstyled">
                    {
                        features.map(feature => (
                            <li key={feature.id}><i className={`fas fa-${feature.included ? `check` : `close`}`}></i>{feature.label}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TrackingPrice;
