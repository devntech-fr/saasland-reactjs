import React from "react";
import SeoTitle from "sections/Title/SeoTitle";

function SeoFact({ facts }) {
    const renderFacts = () => {
        return facts.map((fact, key) => {
            console.log('fact',fact);
            return (
                <div className="seo_fact_item" key={key}>
                    <div className="text">
                        <div className="counter one">{fact.counter}</div>
                        <p>{fact.label}</p>
                    </div>
                </div>
            )
        })
    }
    return (
        <section className="seo_fact_area sec_pad">
            <div className="home_bubble">
                <div className="bubble b_one"></div>
                <div className="bubble b_three"></div>
                <div className="bubble b_four"></div>
                <div className="bubble b_six"></div>
                <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src="img/seo/triangle_one.png" alt=""/></div>
            </div>
            <div className="container">
                <SeoTitle title='Over 1200+ completed work & Still counting.'/>
                <div className="seo_fact_info">
                    {renderFacts()}
                </div>
            </div>
        </section>
    )
}

export default SeoFact
