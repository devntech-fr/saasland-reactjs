import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import NavbarDropdown from "components/Header/NavbarDropdown";

function MenuLink({ href, label, submenu, megaMenu, isActive, key }) {
    return (
        <li className={`nav-item${submenu ? ` dropdown submenu` : ''}${megaMenu ? ` mega_menu mega_menu_two` : ''}${isActive ? ` active` : ''}`} key={key}>
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
            {submenu.length > 0 && (
                <NavbarDropdown>
                    {
                        submenu.map((item, key) => (

                            <li className="nav-item" key={key}>
                                <Link
                                    to={item.href}
                                    className={`nav-link`}
                                >
                                    {item.label}
                                </Link>
                            </li>

                        ))
                    }
                </NavbarDropdown>
            )}
        </li>
    )
}

MenuLink.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    submenu: PropTypes.bool,
    megaMenu: PropTypes.bool,
    isActive: PropTypes.bool,
    children: PropTypes.element
}

MenuLink.defaultProps = {
    href: '/#',
    label: 'Demo',
    submenu: false,
    hasSubmenu: false,
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

export default MenuLink;
