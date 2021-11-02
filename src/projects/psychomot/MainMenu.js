import React, {useEffect} from "react";
import NavbarLink, { NavbarLinkType } from "components/Header/NavbarLink";
import {useHistory, useRouteMatch} from "react-router-dom";
import PropTypes from "prop-types";

function MainMenu({ navbarLinks }) {
    const routeMatch = useRouteMatch();

    useEffect(() => {
        console.log('routeMatch',routeMatch);
    }, [routeMatch]);

    const showLinks = () => {
        return navbarLinks.map((link, key) => (
            <NavbarLink label={link.label} href={link.href} isActive={routeMatch.path === link.href}/>
        ))
    }

    return (
        <React.Fragment>
            {showLinks()}
        </React.Fragment>
    )
}

export default MainMenu;

MainMenu.propTypes = {
    navbarLinks: PropTypes.arrayOf(NavbarLinkType)
}

MainMenu.defaultProps = {
    navbarLinks: [
        {
            id: 1,
            label: "Accueil",
            href: '/',
        },
        {
            id: 2,
            label: "La psychomotricité",
            href: '/la-psychomotricite',
        },
        {
            id: 3,
            label: "Le cabinet",
            href: '/le-cabinet',
        },
        {
            id: 4,
            label: "Me contacter",
            href: '/contact',
        },
    ]
}
