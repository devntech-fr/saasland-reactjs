import React from "react";
import PropTypes from "prop-types";

function AgencyButton({ btn }) {
    return (
        <a href={btn.href} className={`btn_hover agency_banner_btn `+btn.classNames} data-wow-delay={btn.wow}>{btn.label}</a>
    )
}

function AgencyButtonTwo({ btn }) {
    return (
        <a href={btn.href} className={`agency_banner_btn_two `+btn.classNames} data-wow-delay={btn.wow}>{btn.label}</a>
    )
}

export {
    AgencyButton,
    AgencyButtonTwo
}

AgencyButton.propTypes = {
    btn: PropTypes.shape({
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        classNames: PropTypes.string,
        wow: PropTypes.string,
    }),
}
