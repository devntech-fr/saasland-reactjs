import React from "react";
import {themes} from "themes/ThemeContext";

function NavigationWrapper({ children }) {
    const applyTheme = () => {
        return 'menu_four';
    }
    return (
        <nav className={`navbar navbar-expand-lg menu_one${applyTheme()}`}>{children}</nav>
    )
}

export default NavigationWrapper;