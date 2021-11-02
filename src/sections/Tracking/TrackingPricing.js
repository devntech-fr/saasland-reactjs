import React from 'react';
import TrackingPrice from "components/Tracking/TrackingPrice";

const TrackingPricing =({ title, pricing, buttonLink, message })=>{
    return(
        <section className="tracking_price_area sec_pad">
            <div className="container">
                <div className="tracking_price_inner wow fadeInUp">
                    <h2>{title}</h2>
                    <TrackingPrice price={pricing}/>
                    <div className="text-center">
                        <a href="/#" className="software_banner_btn btn_submit f_500">{buttonLink.label}</a>
                        <h6>{message}</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrackingPricing;
