import React from "react";

function ScheduleNav({ children }) {
    return (
        <ul className="nav nav-tabs event_tab" role="tablist">{children}</ul>
    )
}

export default ScheduleNav;
