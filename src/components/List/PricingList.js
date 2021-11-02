import React from "react";

function PricingList({ prices }) {
    return (
        <ul className="list-unstyled domain_price">
            {prices.map(price => (<li key={price.id}>{price.label} <span>{price.currency}{price.amount}</span></li>))}
        </ul>
    )
}

export default PricingList;
