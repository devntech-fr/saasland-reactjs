import React from 'react';

function TabPanel({ identifier, isActive, children }) {
    return (
        <div className={`tab-pane fade${isActive ? ` show active` : ''}`} id={identifier} role="tabpanel" aria-labelledby={`${identifier}-tab`}>
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export default TabPanel;
