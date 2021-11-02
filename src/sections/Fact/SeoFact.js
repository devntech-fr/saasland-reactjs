import React from "react";
import SeoTitle from "sections/Title/SeoTitle";

function SeoFact() {
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
                <SeoTitle Title='Over 1200+ completed work & Still counting.'/>
                <div className="seo_fact_info">
                    <div className="seo_fact_item">
                        <div className="text">
                            <div className="counter one">693</div>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="seo_fact_item">
                        <div className="text">
                            <div className="counter two">276</div>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="seo_fact_item">
                        <div className="text">
                            <div className="counter three">102</div>
                            <p>SEO Winners</p>
                        </div>
                    </div>
                    <div className="seo_fact_item last">
                        <div className="text">
                            <div className="counter four">93</div>
                            <p>Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoFact
