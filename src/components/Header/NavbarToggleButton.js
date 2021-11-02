import React from "react";
import PropTypes from "prop-types";

function NavbarToggleButton({ target }) {
    return (
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target={`#${target}`} aria-controls={target} aria-expanded="false" aria-label="Toggle navigation">
            <span className="menu_toggle">
                <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                </span>
            </span>
        </button>
    )
}

NavbarToggleButton.propTypes = {
    target: PropTypes.string,
}

NavbarToggleButton.defaultProps = {
    target: `navbarSupportedContent`,
}

export default NavbarToggleButton;
