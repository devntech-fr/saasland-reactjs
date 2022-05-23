import React from "react";

function NavbarContainer({ children }) {
    const applyTheme = () => {
        return '';
    }
    return (
        <div className={`container${applyTheme()}`}>{children}</div>
    )
}

export default NavbarContainer;
