import React from "react";

function SupportTabNav({ children }) {
    return (
        <ul className="nav nav-tabs design_tab support_tab" role="tablist">{children}</ul>
    )
}

export default SupportTabNav;
