import React, {useEffect} from "react";
import MenuLink, { NavbarLinkType } from "components/Header/NavbarLink";
import {useHistory, useRouteMatch} from "react-router-dom";
import PropTypes from "prop-types";

function MainMenu({ navbarLinks }) {
    const routeMatch = useRouteMatch();
    console.log('navbarLinks',navbarLinks);

    useEffect(() => {
        console.log('routeMatch',routeMatch);
    }, [routeMatch]);

    const showLinks = () => {
        return navbarLinks.map((link, key) => (
            <MenuLink label={link.label} href={link.href} isActive={routeMatch.path === link.href} index={key}/>
        ))
    }

    return (
        <React.Fragment>
            {showLinks}
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
