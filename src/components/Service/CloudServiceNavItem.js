import React from "react";

function CloudServiceNavItem({ identifier, label, isActive, isSelected }) {
    return (
        <li className="nav-item">
            <a className={`nav-link${isActive ? ` active` : ''}`} data-tab={`tab_${identifier}`} id={`${identifier}-tab`} data-toggle="tab" href={`#${identifier}`} role="tab" aria-controls={identifier} aria-selected={isSelected}>
                {label}
            </a>
        </li>
    )
}

export default CloudServiceNavItem;

CloudServiceNavItem.defaultProps = {
    identifier: 'de',
    isActive: false,
    isSelected: false,
    label: 'Deploy'
}
