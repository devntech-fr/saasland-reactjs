import React from "react";

function AboutEvent({ title, p, image }) {
    return (
        <div className="event_about_item wow fadeInUp" data-wow-delay="0.2s">
            <img src={"/img/home-event/marker.png"} alt=""/>
            <h6>Where</h6>
            <p>Golly gosh the wireless posh loo smashing.</p>
        </div>
    )
}

export default AboutEvent;
