import React from 'react';
import TrackingLogo from 'sections/Tracking/TrackingLogo';
import { displayTitle } from "components/Content/RichContent";

const TrackingBanner =({ title, p, image })=>{
    return(
        <section className="tracking_banner_area text-center">
            <div className="container">
                <div className="tracking_banner_content">
                    <h3 dangerouslySetInnerHTML={displayTitle(title)}></h3>
                    <p>{p}</p>
                    <img src={image.src} alt={image.alt} />
                </div>
                <TrackingLogo/>
            </div>
        </section>
    )
}

export default TrackingBanner;
