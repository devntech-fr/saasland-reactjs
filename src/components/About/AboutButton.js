import React from "react";
import PropTypes from "prop-types";

function AboutButton() {
    return (
        <a href=".#" className="about_btn">Meet Your Team</a>
    )
}

AboutButton.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string
}

export default AboutButton;
