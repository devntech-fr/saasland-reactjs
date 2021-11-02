import React from "react";

function ScheduleRow({ image, hours, location, author, title, description }) {
    return (
        <div className="media">
            <div className="media-left">
                <img
                    src={image.src}
                    alt={image.alt}
                />
                <a href="/#">
                    <i className="icon_clock_alt"></i>{hours}
                </a>
                <a href="/#">
                    <i className="icon_pin_alt"></i>{location}
                </a>
            </div>
            <div className="media-body">
                <h3 className="h_head">{title}</h3>
                <span>
                      by <a href="/#">{author}</a>
                    </span>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ScheduleRow;
