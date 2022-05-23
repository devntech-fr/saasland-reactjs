import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function NavbarBrand({ logoClass, logo, logoSticky }) {
    const logoClassName = logoClass !== undefined ? logoClass : '';
    const showLogo = () => {
        const regex = new RegExp(/\.(jpg|png|jpeg|svg|webp)$/)
        if (regex.test(logo)) {
            return (
                <>
                    {logo && <img src={logo.src} alt={logo.alt} height={80}/>}
                    {logoSticky && <img src={logoSticky.src} alt={logoSticky.alt} height={50}/>}
                </>
            )
        }
        return (
            <span>Dev'nTech</span>
        )
    }
    return (
        <Link className={`navbar-brand ${logoClassName}`} to="/">
            {showLogo()}
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
