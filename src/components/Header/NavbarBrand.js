import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function NavbarBrand({ logoClass, logo, logoSticky}) {
    const logoClassName = logoClass !== undefined ? logoClass : '';
    return (
        <Link className={`navbar-brand ${logoClassName}`} to="/">
            {logo && <img src={logo.src} alt={logo.alt} height={80}/>}
            {logoSticky && <img src={logoSticky.src} alt={logoSticky.alt} height={50}/>}
        </Link>
    )
}

NavbarBrand.propTypes = {
    sticky: PropTypes.bool,
    logo: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    logoSticky: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
}

NavbarBrand.defaultProps = {
    sticky: true,
    logo: {
        src: `/img/logo_psychomot.png`,
        alt: "Logo psychomotricienne"
    },
    logoSticky: {
        src: `/img/logo_psychomot.png`,
        alt: "Logo psychomotricienne"
    }
}

export default NavbarBrand;
