import React from 'react';
import Reveal from 'react-reveal';

function StartupServiceItem({icon,text,description, iconClass}) {
    return (
        <Reveal bottom cascade>
            <div className="startup_service_item">
                <div className={`icon ${iconClass}`}><i className={`${icon}`}></i></div>
                <h3>{text}</h3>
                <p>{description}</p>
            </div>
        </Reveal>
    )
}

export default StartupServiceItem;
