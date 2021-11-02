import React from "react";

function SeoFact({ id, number, label }) {
    return (
        <div className="seo_fact_item wow fadeIn">
            <div className="text">
                <div className={`counter ${id}`}>{number}</div>
                <p>{label}</p>
            </div>
        </div>
    )
}

export default SeoFact;
