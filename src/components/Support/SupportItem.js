import React from "react";

function SupportItem({ image, title, buttonLink }) {
    return (
        <div className="support_item">
            <img src={image.src} alt={image.alt}/>
            <h4>{title}</h4>
            <a href={buttonLink.href} target={buttonLink.target} className="software_banner_btn btn_submit f_size_15 f_500">{buttonLink.label}</a>
        </div>
    )
}

export default SupportItem;
