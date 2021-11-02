import React from "react";
import {ThemeContext, themes} from "themes/ThemeContext";

function NavbarContainer({ children }) {
    const applyTheme = () => {
        return '';
    }
    return (
        <div className={`container${applyTheme()}`}>{children}</div>
    )
}

export default NavbarContainer;
