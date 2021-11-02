import React from "react";
import PropTypes from "prop-types";
import Image from "types/Image";

var CallToActionButton = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    target: PropTypes.string,
    iconClass: PropTypes.string,
    image: PropTypes.shape(Image),
}

export default CallToActionButton;
