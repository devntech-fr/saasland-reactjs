import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function NavbarLink({ href, label, submenu, megaMenu, isActive, children }) {
    return (
        <li className={`nav-item${submenu ? ` dropdown submenu` : ''}${megaMenu ? ` mega_menu mega_menu_two` : ''}${isActive ? ` active` : ''}`}>
            <Link
                to={href}
                className={`nav-link${submenu ? ` dropdown-toggle` : ''}`}
                role={submenu ? `button` : ''}
                data-toggle={submenu ? `dropdown` : ''}
                aria-haspopup={!!submenu}
                aria-expanded={!submenu}
            >
                {label}
            </Link>
            {children}
        </li>
    )
}

NavbarLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    submenu: PropTypes.bool,
    megaMenu: PropTypes.bool,
    isActive: PropTypes.bool,
    children: PropTypes.element
}

NavbarLink.defaultProps = {
    href: '/#',
    label: 'Sample',
    submenu: false,
    isActive: false,
    megaMenu: false
}

export var NavbarLinkType = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    submenu: PropTypes.bool,
    megaMenu: PropTypes.bool,
    isActive: PropTypes.bool,
    children: PropTypes.element
}

export default NavbarLink;
