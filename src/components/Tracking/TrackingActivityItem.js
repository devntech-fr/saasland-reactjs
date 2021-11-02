import React from "react";

function TrackingActivityItem({ image, title, p }) {
    return (
        <div className="media tracking_item">
            <img src={image.src} alt={image.alt} />
            <div className="media-body">
                <a href="/#"><h3 className="h_head">{title}</h3></a>
                <p>{p}</p>
            </div>
        </div>
    )
}

export default TrackingActivityItem;
