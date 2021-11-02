import React from "react";
import { displayParagraph } from "components/Content/RichContent";

function SupportNavItem({ item }) {
    const { isActive, identifier, isSelected, title, p } = item;
    return (
        <li className="nav-item wow fadeInUp" data-wow-delay="0.4s">
            <a className={`nav-link${isActive ? ` active` : ''}`} id={`${identifier}-tab`} data-toggle="tab" href={`#${identifier}`} role="tab" aria-controls={identifier} aria-selected={isSelected}>
                <h5>{title}</h5>
                <p dangerouslySetInnerHTML={displayParagraph(p)}></p>
            </a>
        </li>
    )
}

SupportNavItem.defaultProps = {
    item:{
        title: 'Collaboration',
        p: `Design to development,<br/> automated`,
        identifier: 'one',
        isActive: true,
        isSelected: true
    }
}

export default SupportNavItem;
