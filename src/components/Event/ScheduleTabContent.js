import React from "react";

function ScheduleTabContent({ identifier, isActive = false, children }) {
    return (
        <div
            className={`tab-pane fade${isActive ? ` show active` : ''}`}
            id={identifier}
            role="tabpanel"
            aria-labelledby={`${identifier}-tab`}
        >{children}</div>
    )
}

export default ScheduleTabContent;
