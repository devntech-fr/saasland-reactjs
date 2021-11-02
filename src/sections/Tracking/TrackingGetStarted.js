import React from 'react';

const TrackingGetStarted =({ image, title, buttonLink })=>{
    return(
        <section className="tracking_getting_area sec_pad">
            <div className="container wow fadeInUp">
                <img src={image.src} alt={image.alt} />
                <h2>{title}</h2>
                <a href="/#" className="software_banner_btn btn_submit f_500">{buttonLink.label}</a>
            </div>
        </section>
    )
}

export default TrackingGetStarted;
