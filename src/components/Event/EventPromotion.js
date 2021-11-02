import React from "react";

function EventPromotion({ image, tag, date, title, description, buttonLink }) {
    return (
        <div className="event_promotion_inner">
            <div className="event_img">
                {image && <img src={image.src} alt=""/>}
            </div>
            <div className="row event_promotion_info align-items-center">
                <div className="col-md-6">
                    <div className="e_promo_text wow fadeInDown">
                        <div className="d-flex">
                            <a href="/#" className="promo_tag">{tag}</a>
                            <a href="/#" className="date">{date}</a>
                        </div>
                        <h3>{title}</h3>
                        {buttonLink && <a href={buttonLink.href} target={buttonLink.target} className="event_btn event_btn_two btn_hover">{buttonLink.label}</a>}
                    </div>
                </div>
                <div className="col-md-6">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default EventPromotion;
