import React from "react";
import PropTypes from "prop-types";
import { ThemeContext, themes } from "themes/ThemeContext";

function NavbarButton({ href, target, label }) {

    const getThemeClass = () => {
        return 'menu_cus';
    }

    return (
        <ThemeContext.Consumer>
            {(theme) => {
                console.log('theme',theme);
                return (
                    <a className={`btn_get btn_hover ${getThemeClass()}`} href={href} target={target}>{label}</a>
                )
            }}
        </ThemeContext.Consumer>
    )
}

NavbarButton.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default NavbarButton;
