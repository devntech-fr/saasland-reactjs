import React from "react";

function ScheduleNavItem({ identifier, isSelected = false, title, date }) {
    return (
        <li className="nav-item wow fadeInUp" data-wow-delay="0.4s">
            <a
                className="nav-link active"
                id={`${identifier}-tab`}
                data-toggle="tab"
                href={`#${identifier}`}
                role="tab"
                aria-controls={identifier}
                aria-selected={isSelected}
            >
                <h5>
                    {title}<span>{date}</span>
                </h5>
            </a>
        </li>
    )
}

export default ScheduleNavItem;
